import { useTodo, TodoResponse } from "../use_x/use_todo";

export const Todo = () => {
  const [data, isFetching] = useTodo(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <>
      <h2>Custom Hook</h2>

      {isFetching ? <p>Fetching...</p> : <p>{(data as TodoResponse).title}</p>}
    </>
  );
};
