import { useState, useRef, useEffect } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  let count = useRef(0);

  const incrementCount = () => {
    count.current++;
  };

  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          incrementCount();
        }}
      />

      <p>{value}</p>
      <p>I have rendered {count.current} times</p>
    </>
  );
};
