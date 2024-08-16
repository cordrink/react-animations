import React, { useEffect, useRef, useState } from "react";
import "./StateAnim.css";
import { v4 as uuidv4 } from "uuid";
import { useTransition, animated } from "react-spring";

export default function StateAnim() {
  const [firstDisplay, setfirstDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setfirstDisplay(false);
    }, 1000);
  }, []);

  const [inputData, setinputData] = useState([
    {
      id: uuidv4(),
      txt: "Chopin",
    },
    {
      id: uuidv4(),
      txt: "Mozart",
    },
    {
      id: uuidv4(),
      txt: "Bach",
    },
  ]);

  const inputRef = useRef();

  const prevFunc = (e) => {
    e.preventDefault();

    const newObj = {
      id: uuidv4(),
      txt: inputRef.current.value,
    };

    if (newObj.txt) {
      setinputData([...inputData, newObj]);

      inputRef.current.value = "";
    }
  };

  const listTransition = useTransition(inputData, {
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    keys: inputData.map((item) => item.id),
  });

  return (
    <form onSubmit={prevFunc}>
      <label htmlFor="piano">Renseigner vos pianiste favoris.</label>
      <input ref={inputRef} type="text" id="piano" />

      {firstDisplay ? (
        <ul>
          {inputData.map((item) => (
            <li key={item.id}>{item.txt}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {listTransition((style, item) => {
            return <animated.li style={style}>{item.txt}</animated.li>;
          })}
        </ul>
      )}
    </form>
  );
}
