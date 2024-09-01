import React, { useEffect, useState } from 'react'

const Content = () => {
    const [apiData, setData] = useState([]);
    const [name1, setName] = useState('');
    const [rating1, setRating] = useState('');
    const [genre1, setGenre] = useState('');
    const [msg, setMsg] = useState('');
    useEffect(() => { 
        const fetchData = async () => {
            const dataApi = await fetch('http://localhost:5000/moviesapi/retriveall');
            const finalRes = await dataApi.json();
            setData(finalRes);
        }
        fetchData();
    }, [])
    const add = async () => {
        const postMovie = await fetch('http://localhost:5000/moviesapi/add', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({'name': name1, 'genre': genre1, 'rating': rating1})
        })
        if(postMovie){
          setMsg('successfully added')
        }
        else{
            setMsg("couldn't add");
          }
    }
    const deleteMovie = async () => {
      const deleter = await fetch('http://localhost:5000/moviesapi/deletename', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'name': name1})
      })
      if(deleter){
            setMsg('successfully deleted')
      }
      else{
        setMsg("couldn't delete");
      }
    }
  return (
    <div>
      {apiData.map((item) => (
        <>
        <div className='border-2 border-black h-32 w-64 p-4 inline-block'>
            <p className='font-serif italic bold' key={item.id}>Movie Name: {item.name}</p>
            <p className='font-serif text-green-600' key={item.id}>Movie Rating: {item.rating}</p>
            <p className='font-serif text-red-500' key={item.id}>Movie Genre: {item.genre}</p>
        </div>
        </>
      ))}
      <p>Add Movie to DB</p>
      <input type="text" placeholder='name' name="name" onChange={(e) => {setName(e.target.value)}} />
      <input type="text" placeholder='rating' name="rating" onChange={(e) => {setRating(e.target.value)}} />
      <input type="text" placeholder='genre' name="genre" onChange={(e) => {setGenre(e.target.value)}} />
        <button onClick={add}>Add</button>
        <p>{msg}</p>
      <p>Delete</p>
      <input type="text" name='delete' placeholder='movie name' onChange={(e) => {setName(e.target.value)}} />
      <button onClick={deleteMovie}>Delete</button>
      <p>{msg}</p>
    </div>
  )
}

export default Content
