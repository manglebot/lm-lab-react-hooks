import { useEffect, useState } from "react";

interface Todo {
  title: string;
}

export const APICall = () => {
  const [json, setJson] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        setJson(data);
      } catch (error) {
        console.error("error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>{json ? json.title : "Loading..."}</p>
    </>
  );
};
