import { useFetch } from "./use_fetch";

interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const { data, isFetching } = useFetch<TodoResponse>(url);

  return (
    <>
      {" "}
      <h2>Custom Hook</h2>{" "}
      {isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}{" "}
    </>
  );
};
