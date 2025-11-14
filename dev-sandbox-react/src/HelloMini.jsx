import { useState } from "react";

export default function HelloMini() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Type your name"
      />
      <p>Hello, {name || "friend"}!</p>
    </>
  );
}
