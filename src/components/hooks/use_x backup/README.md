# Custom Hooks

React comes with many in-built hooks such as useState, useMemo, useContext, useEffect and more.

However, there will be times when you wish there was a hook for something more specific, like fetching some data, toggling modals or themes, or checking if a user is logged in.

These hooks don't exist in React... but! We can create our own hooks by combining the built-in hooks to satisfy our own specific needs.

This allows us to reuse logic across functions.

For example, we might have a hook called `useIsLoggedIn()` which encapsulates checks for if the current user is logged into our site, and this can be easily used in each component:

```JSX
const isLoggedIn = useIsLoggedIn();
```

💡 A custom hook is a function whose name begins with `use`. It can call other React hooks such as `useState` or `useEffect`, etc.

## Instructions

👉 Make yourself familiar with the files in the `hooks/use_x` folder.

In `todo.tsx` there is a component called `Todo`. This component makes an API call to the JSONTypicode API.

If the component has finished fetching, it then displays the title of a Todo on the screen.

This is fine, but what if we wanted to make calls to other APIs in our application? Would we have to write another fetch function, with another `useEffect`, in another component? Hmmm...

## The Mission

If you look inside the `todo.tsx` file you will find some starter code.

👉 Step One: Create a `useTodo` hook that extracts the existing logic from the `<Todo>` component.

Using the React documentation and your own genius 😉 have a go at stripping some of the starter code out into separate file.

This W3 page may be helpful: https://www.w3schools.com/react/react_customhooks.asp

Hint: you just need to move ALL the hooks from the component into a new file called `use_todo.ts`. Think about what it needs to return - what data does the `<Todo>` component require?

Then call your new hook in the `<Todo>` component:

```JSX
const your_chosen_return_values_go_here = useTodo();
return (<>
			<h2>Custom Hook</h2>
			{isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
		</>)
```

👉 Step Two: Convert your `useTodo` hook into a _reusable custom hook_ that can be reused throughout an application to fetch from _different endpoints_ from the same API.

## Have I solved this challenge correctly?

Your solution should...

1. Still display "delectus aut autem" on the screen and "Fetching..." when the function is fetching.

2. Have a file containing a custom hook that fetches an API

3. The custom hook should be able to call any JSONPlaceholder.com endpoint URL that it is passed

See `customHooks/hints.md` if you get stuck!

## Food For Thought

Use the React documentation to help you: https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components

-   🤔 What word do custom hook names always start with?

-   🤔 Why are custom hooks beneficial?

-   🤔 What other custom hooks might you write? What common custom hooks are do people use?
