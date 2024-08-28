import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const dataReceived = await fetch('http://localhost:5000/moviesapi/retriveall');
      const dataJson = await dataReceived.json();
      setData(dataJson);
    }
    dataFetch();
  }, [])
  return (
    <main>
      {
        data.map((item) => (
          <div key={item._id}>{item.name} {item.rating}</div>
        ))
      }
    </main>
  )
}

export default App
