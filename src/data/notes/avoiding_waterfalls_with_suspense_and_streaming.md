# Avoiding waterfalls with Suspense and streaming

A **waterfall** in a React app is when one request waits for another to finish before it even starts. The UI feels slow not because each fetch is slow — but because they run in a line instead of together. Suspense and streaming help you break that pattern: start work earlier, show what is ready sooner, and stop blocking the whole page on the slowest piece of data.

#### What a waterfall looks like

This is the classic client-side waterfall:

```jsx
function Dashboard() {
  const [user, setUser] = useState(null)
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((user) => {
        setUser(user)
        return fetch(`/api/projects?userId=${user.id}`)
      })
      .then((res) => res.json())
      .then(setProjects)
  }, [])

  if (!user || !projects) return <p>Loading everything...</p>

  return (
    <>
      <UserHeader user={user} />
      <ProjectList projects={projects} />
    </>
  )
}
```

Problems:

1. Projects cannot start until the user request finishes — even if the API could accept both in parallel.
2. Nothing useful renders until **both** requests are done.
3. One slow endpoint holds the whole screen hostage.

If `user` depends on `projects`, the chain is real. Often it is not — we just nested fetches out of habit.

#### Fetch as early as you can

The first fix is conceptual: **kick off independent work immediately**, then let components read the result.

```jsx
const userPromise = fetch('/api/user').then((res) => res.json())
const projectsPromise = fetch('/api/projects').then((res) => res.json())

function Dashboard() {
  return (
    <>
      <Suspense fallback={<HeaderSkeleton />}>
        <UserHeader userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <ProjectList projectsPromise={projectsPromise} />
      </Suspense>
    </>
  )
}
```

Both requests start together. Each section can appear when its own data is ready.

With React 19’s `use` hook, a child can unwrap a promise inside Suspense:

```jsx
import { use, Suspense } from 'react'

function UserHeader({ userPromise }) {
  const user = use(userPromise)
  return <h1>Hello, {user.name}</h1>
}

function ProjectList({ projectsPromise }) {
  const projects = use(projectsPromise)
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  )
}
```

While `userPromise` is pending, only the header fallback shows. The project list can still resolve on its own timeline.

#### Nested Suspense vs one big boundary

One Suspense boundary around the whole page recreates the waterfall feeling:

```jsx
// The slowest child still blocks everything inside
<Suspense fallback={<FullPageSpinner />}>
  <UserHeader userPromise={userPromise} />
  <ProjectList projectsPromise={projectsPromise} />
  <ActivityFeed feedPromise={feedPromise} />
</Suspense>
```

Split boundaries so fast sections unlock early:

```jsx
<>
  <Suspense fallback={<HeaderSkeleton />}>
    <UserHeader userPromise={userPromise} />
  </Suspense>

  <Suspense fallback={<ListSkeleton />}>
    <ProjectList projectsPromise={projectsPromise} />
  </Suspense>

  <Suspense fallback={<FeedSkeleton />}>
    <ActivityFeed feedPromise={feedPromise} />
  </Suspense>
</>
```

That is the UI version of parallel work: **stream pieces of the page as they become ready**.

#### Streaming on the server

In frameworks like Next.js (App Router), streaming means the server can send HTML in chunks instead of waiting for every async component.

```jsx
// app/dashboard/page.jsx
import { Suspense } from 'react'

async function UserHeader() {
  const user = await getUser()
  return <h1>Hello, {user.name}</h1>
}

async function ProjectList() {
  const projects = await getProjects()
  return <ProjectTable projects={projects} />
}

export default function DashboardPage() {
  return (
    <main>
      <Suspense fallback={<HeaderSkeleton />}>
        <UserHeader />
      </Suspense>
      <Suspense fallback={<ListSkeleton />}>
        <ProjectList />
      </Suspense>
    </main>
  )
}
```

What streaming buys you:

- The shell of the page can arrive quickly
- Slow sections keep streaming in later
- Users see layout and placeholders instead of a blank document
- Time to first byte and time to first meaningful paint both improve

Without Suspense boundaries, an `await` higher in the tree can block the whole response again — a server-side waterfall.

#### Waterfalls inside data libraries

TanStack Query and similar tools can still waterfall if you wait for one query before enabling the next:

```jsx
const { data: user } = useQuery({
  queryKey: ['user'],
  queryFn: fetchUser,
})

const { data: projects } = useQuery({
  queryKey: ['projects', user?.id],
  queryFn: () => fetchProjects(user.id),
  enabled: !!user?.id,
})
```

That chain is correct when `user.id` is required. If projects do not need the user id, fetch them independently:

```jsx
const userQuery = useQuery({ queryKey: ['user'], queryFn: fetchUser })
const projectsQuery = useQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
})
```

Prefetching on the server or in a route loader is another way to start work before the component tree mounts — same idea as starting promises early.

#### When a waterfall is unavoidable

Some dependencies are real:

- You need an auth token before calling a private API
- You need a selected project id from the first response
- The second endpoint literally requires data from the first

In those cases:

1. Fetch the required parent as early as possible
2. Keep Suspense boundaries around the dependent section only
3. Show the rest of the page without waiting

```jsx
<>
  <Suspense fallback={<HeaderSkeleton />}>
    <UserHeader />
  </Suspense>

  <Suspense fallback={<DetailsSkeleton />}>
    <ProjectDetails /> {/* may await user + project */}
  </Suspense>
</>
```

Do not block the header, navigation, or unrelated widgets on that chain.

#### A practical checklist

1. List your requests. Which ones are truly dependent?
2. Start independent requests at the same time — do not nest them.
3. Wrap independent UI sections in separate `Suspense` boundaries.
4. Prefer skeletons per section over one full-page spinner.
5. On the server, avoid awaiting everything in the parent before rendering children.
6. Prefetch when you know data will be needed on the next screen.

#### Final thoughts

Waterfalls are often an architecture habit, not a network limit. Suspense lets each part of the tree wait on its own data. Streaming lets the server send the page as those parts resolve. Together they change the question from “Is all data ready?” to “What can we show already?” — and that is usually what makes an app feel fast.
