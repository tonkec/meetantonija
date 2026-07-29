# Server state vs client state

For a long time I treated all state the same: put it in `useState`, maybe lift it up, maybe shove it into Context. That works — until your app starts talking to a real backend. Suddenly you are caching API responses by hand, refetching on every mount, and writing loading flags next to every `fetch`. That is usually the moment **server state** and **client state** deserve different homes — and TanStack Query (React Query) is built for that boundary.

#### What is client state?

**Client state** lives in the browser and belongs to the UI. You create it, you change it, and nothing on the server needs to know about it unless you explicitly send it.

Typical examples:

- Is the modal open?
- Which tab is selected?
- Is the sidebar collapsed?
- What did the user type in a form before submitting?
- Temporary filters that only affect the current screen

This is a great fit for `useState`, `useReducer`, or a small UI store:

```jsx
function ProductPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState('newest')

  return (
    <>
      <button onClick={() => setIsFiltersOpen(true)}>Filters</button>
      {/* ... */}
    </>
  )
}
```

If you refresh the page and that state disappearing is fine, it is probably client state.

#### What is server state?

**Server state** is data that already exists somewhere else — usually an API — and your UI is only a temporary mirror of it.

Typical examples:

- A list of projects from the backend
- The current user profile
- Subscription status from a paywall API
- Analytics dashboards
- Anything another client could also change

Server state has properties that `useState` does not handle well on its own:

- It can be **stale** while you are looking at it
- It needs **caching** so you do not refetch constantly
- Multiple screens may need the **same** data
- Updates often need **optimistic UI**, retries, and background refetching
- Loading and error states are part of the data lifecycle, not just local flags

That is why this pattern gets messy fast:

```jsx
function Projects() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    setIsLoading(true)
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setProjects(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  // ...
}
```

You just reinvented a small, incomplete version of a query library.

#### Where TanStack Query fits

TanStack Query is a **server-state** library. It owns fetching, caching, refetching, and the status of remote data. It is not a replacement for all React state.

```jsx
import { useQuery } from '@tanstack/react-query'

function Projects() {
  const { data: projects, isPending, error } = useQuery({
    queryKey: ['projects'],
    queryFn: () => fetch('/api/projects').then((res) => res.json()),
  })

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  )
}
```

With a `queryKey`, the same data can be shared across components. If another screen asks for `['projects']`, Query can serve the cached result and refresh it in the background when needed.

Mutations belong here too when you change remote data:

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query'

function CreateProject() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newProject) =>
      fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify(newProject),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
  })

  return (
    <button
      onClick={() => mutation.mutate({ title: 'New project' })}
      disabled={mutation.isPending}
    >
      Create
    </button>
  )
}
```

After a successful write, you invalidate the related query so the UI catches up with the server — the source of truth.

#### The boundary in practice

A useful rule of thumb:

| Kind of state | Examples | Keep it in |
| --- | --- | --- |
| Client / UI | modals, tabs, draft form values, local toggles | `useState` / `useReducer` / UI store |
| Server / remote | API lists, user profile, entitlements | TanStack Query |
| URL state | page, filters you want shareable | search params |
| Form-before-submit | uncontrolled or local fields | form state, then mutate |

Here is how both layers often appear in one component:

```jsx
function ProjectsPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [search, setSearch] = useState('')

  const { data: projects = [], isPending } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  })

  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search projects"
      />
      <button onClick={() => setIsCreateOpen(true)}>New project</button>
      {isPending ? <p>Loading...</p> : <ProjectList projects={filtered} />}
      {isCreateOpen && <CreateProjectModal onClose={() => setIsCreateOpen(false)} />}
    </>
  )
}
```

- `isCreateOpen` and `search` are **client state**
- `projects` is **server state**
- `filtered` is **derived** — no need to store it separately

Putting `projects` into Context or Redux “because many components need it” is often unnecessary once Query already caches by key.

#### Common mistakes

**1. Putting server data only in `useState`**
You lose caching, deduping, background refetch, and shared freshness across routes.

**2. Putting UI state into Query**
Do not create a query for “is the modal open”. Query is for asynchronous remote data, not every boolean in your tree.

**3. Syncing Query data into local state by default**

```jsx
// Usually a smell
const { data } = useQuery({ queryKey: ['user'], queryFn: fetchUser })
const [user, setUser] = useState(null)

useEffect(() => {
  if (data) setUser(data)
}, [data])
```

Now you have two sources of truth. Prefer reading `data` directly. Local copies make sense when you are editing a draft that should diverge until save.

**4. Treating filters as only client state when they should be shareable**
If someone should open the same filtered view from a link, put those filters in the URL and include them in the `queryKey`:

```jsx
const [searchParams] = useSearchParams()
const status = searchParams.get('status') ?? 'all'

const { data } = useQuery({
  queryKey: ['projects', { status }],
  queryFn: () => fetchProjects({ status }),
})
```

#### A simple decision checklist

Ask yourself:

1. Does this data come from an API or remote source?
2. Could another user or another tab change it?
3. Do I care about stale vs fresh?
4. Do multiple screens need the same cached value?

If yes, lean toward **TanStack Query**.
If it only exists to control this UI right now, keep it as **client state**.

#### Final thoughts

Server state and client state solve different problems. Client state is about interaction. Server state is about reflecting and updating remote truth. TanStack Query shines when you stop asking `useEffect` to be a cache, a refetch engine, and a loading manager all at once — and instead let Query own the remote side of the boundary. Once that split is clear, your components get simpler: UI toggles stay local, API data stays in queries, and mutations invalidate what they change.
