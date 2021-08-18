import { useEffect, useState, useRef } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  // El return del hook useEffect se dispara solo cuando el componente se desmonta
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);
  return state;
};

export default useFetch;
