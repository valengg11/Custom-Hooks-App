import React, { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

import "./layout.css";

const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0]; // Si existe la data, extraer la posicion 0 de la data
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})
  useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect())
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pTag}>{quote}</p>
      </blockquote>
      <pre>
          {JSON.stringify(boxSize, null, 3)}
      </pre>
      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};

export default LayoutEffect;
