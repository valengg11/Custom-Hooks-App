import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a generar :c");
  return (
    <button className="btn btn-info" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});

export default ShowIncrement;
