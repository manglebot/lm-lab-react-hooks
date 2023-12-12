import { useState, useRef, useEffect } from "react";

let renderedNum = 1;

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current++;
    renderedNum = count.current;
  });

  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{value}</p>
      <p>I have rendered {renderedNum} times</p>
    </>
  );
};
