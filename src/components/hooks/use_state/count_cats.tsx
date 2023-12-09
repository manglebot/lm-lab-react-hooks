import { useState } from "react";

export function CountCats() {
  const [cat, setCats] = useState(["🐈"]);

  const cats = cat.length;

  function increaseCount() {
    setCats(() => [...cat, "🐈"]);
  }

  return (
    <>
      <h2>useState</h2>

      <p>{cat}</p>

      <button onClick={increaseCount}>There are {cats} cats 🥳</button>
    </>
  );
}
