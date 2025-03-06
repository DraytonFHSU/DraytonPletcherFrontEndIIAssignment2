import React, { useState, useEffect } from "react";

export default function Greeting(props) {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString()); //State to be updated
  const [username, setName] = useState("Dennis");
  const username2 = "Tom"

  useEffect(() => { //hook so that this works in a function component
    const intervalId = setInterval(() => { //interval for dynamic updates
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval when the component unmounts so that it doesn't cause a memory leak
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>
      <h1>Hello {username}! Welcome to React!</h1>
      <p>Not your name? Maybe {username2}? You know what, change it here!{'\t'}
        <input
        type="text"
        value={username}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name Change"
      /></p>
      <p style={{ color: "red" }}>
        The date is {currentTime}.
      </p>
    </span>
  );
}
