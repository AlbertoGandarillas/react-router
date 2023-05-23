import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Error al consumir el api");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return { data, loading, error };
};
// const [todos, setTodos] = useState(null)

//   const fetchData = useCallback(
//     async () => {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//         const data = await res.json();
//         setTodos(data);
//     }
//  ,[] )

// useEffect(()=>{
//   // fetch("https://jsonplaceholder.typicode.com/todos/")
//   //     .then((res) => res.json())
//   //     .then(data => {
//   //       setTodos(data)
//   //     });
//   fetchData();
//       console.log("page load")
// },[])
