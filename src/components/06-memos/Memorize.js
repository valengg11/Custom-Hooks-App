import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

import "../02-useEffect/effect.css";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>Memorize</h1>
      <h1>
        Counter:
        <Small value={counter} />
      </h1>
      <button className="btn btn-info" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-info ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default Memorize;
