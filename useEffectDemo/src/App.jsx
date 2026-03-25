import React, { useEffect } from 'react'

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
      .catch((error) =>console.log("error fetching data"));
  }, [])
  console.log(data, 'data');
  return (
    <>
      {data?<div>{data[0].title}</div>:<p>No data found</p>}
    </>
  )
}
