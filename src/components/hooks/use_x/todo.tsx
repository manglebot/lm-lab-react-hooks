import { useTodo } from "../use_x/use_todo";

export const Todo = () => {
  const [data, isFetching] = useTodo();

  return (
    <>
      <h2>Custom Hook</h2>

      {isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
    </>
  );
};
