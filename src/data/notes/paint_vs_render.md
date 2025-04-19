# Paint vs. render in React

If you’ve ever tried to understand how React rendering works or when exactly `useEffect` or `useLayoutEffect` runs, you’ve probably come across the terms **render** and **paint**. They’re often thrown around as if they mean the same thing — but they don’t. In fact, understanding the difference can help you write better React apps and debug tricky layout issues. Let’s clear it up.

#### What is “Render”?

In React, **rendering** refers to the process where React calls your component functions to produce a new virtual DOM. This happens when state or props change, or the parent re-renders. React compares this new virtual DOM to the previous one in a process called reconciliation. Once it figures out what’s changed, it updates the real DOM accordingly. At this point, your changes are in the DOM, but the browser hasn’t yet updated what’s visible on the screen. You could say the browser is holding off on showing those changes — and that’s where **paint** comes in.

#### What is “Paint”?

**Paint** is what happens after React has updated the DOM and handed control over to the browser. During this phase, the browser calculates layout, applies styles, and finally draws pixels to the screen — text, colors, boxes, images, etc. It’s the point at which users actually _see_ the results of your update. In simple terms: render builds the structure; paint makes it visible.

#### A Real-World Analogy

Think of it like decorating a room. During "render," you move the furniture around, put up shelves, and lay out your decor — but the lights are off. During "paint," you flip the lights on and see the final look. You could walk in during the render phase and not know what the room will look like. Paint is what makes it all real.

#### So Where Do `useEffect` and `useLayoutEffect` Fit?

This timing difference is exactly why React gives us two different hooks for side effects — `useEffect` and `useLayoutEffect`.

`useLayoutEffect` runs after the DOM has been updated but **before** the browser paints. That means you can still make layout adjustments or read measurements at that point, and the user won’t see any visual jumping or flashing. This hook is useful when you need to measure something in the DOM (`getBoundingClientRect`), scroll an element into view, or fix something about the layout before it hits the screen.

On the other hand, `useEffect` runs **after** the browser has painted everything. At this point, what the user sees is already on the screen, so any DOM reads or writes won’t affect the initial frame. That makes `useEffect` a good place for non-visual side effects like fetching data, logging, or setting up event listeners.

#### Timeline (Simplified)

Here’s how things happen in order:

1. React calls your component function and evaluates the JSX. This creates a new virtual DOM tree.
2. It performs reconciliation — comparing the new tree with the previous one to determine what changed.
3. React updates the real DOM with those changes, but nothing is visible yet.
4. React runs any `useLayoutEffect` hooks, giving you a window to make layout adjustments.
5. The browser paints the screen — rendering pixels, styles, and layout to the user.
6. Finally, React runs any `useEffect` hooks, which are safe to run after everything is already visible.

#### Final Thoughts

While they might seem similar, **render** and **paint** are two distinct phases in how React and the browser work together. React’s rendering is all about calculating what should be shown. The browser’s paint phase is where those changes become visible to users. When you're writing effects in React, the timing really matters. Reach for `useLayoutEffect` when you need to affect layout before the screen updates, and stick with `useEffect` for everything else that can safely run afterward. Understanding this subtle difference is a small but powerful step toward mastering performance and behavior in React — and it's the kind of knowledge that shines in interviews too.
