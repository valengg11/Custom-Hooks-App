import React from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

import "../02-useEffect/effect.css";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; // Si existe la data, extraer la posicion 0 de la data
  return (
    <div>
      <h1>BreakingBad Quotes!</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
