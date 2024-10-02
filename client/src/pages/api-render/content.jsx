import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, Box } from '@mui/material';

const Content = () => {
    const [apiData, setData] = useState([]);
    const [name1, setName] = useState('');
    const [rating1, setRating] = useState('');
    const [genre1, setGenre] = useState('');
    const [msg, setMsg] = useState('');
    const [name, setName1] = useState('');

    useEffect(() => { 
        const fetchData = async () => {
            const dataApi = await fetch('http://localhost:5000/moviesapi/retriveall');
            const finalRes = await dataApi.json();
            setData(finalRes);
        }
        fetchData();
    }, []);

    const add = async () => {
        const postMovie = await fetch('http://localhost:5000/moviesapi/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'name': name1, 'genre': genre1, 'rating': rating1 })
        });
        if (postMovie.ok) {
            setMsg('Successfully added');
        } else {
            setMsg("Couldn't add");
        }
    };

    const deleteMovie = async () => {
        const deleter = await fetch('http://localhost:5000/moviesapi/deletename', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'name': name1 })
        });
        if (deleter.ok) {
            setMsg('Successfully deleted');
        } else {
            setMsg("Couldn't delete");
        }
    };

    const update = async () => {
        const updateResponse = await fetch(`http://localhost:5000/moviesapi/updatebyname/${name1}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'name': name1, 'genre': genre1, 'rating': rating1 })
        });
        if (updateResponse.ok) {
            setMsg('Updated Successfully');
        } else {
            setMsg("Couldn't Update");
        }
    };

    return (
        <div>
            <Box display="flex" flexWrap="wrap" gap={2} padding={2}>
                {apiData.map((item) => (
                    <Card key={item.id} sx={{ minWidth: 200, maxWidth: 250, border: '1px solid #000' }}>
                        <CardContent>
                            <Typography variant="h6" component="div" fontWeight="bold">
                                Movie Name: {item.name}
                            </Typography>
                            <Typography color="text.secondary">
                                Movie Rating: {item.rating}
                            </Typography>
                            <Typography color="text.secondary">
                                Movie Genre: {item.genre}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <Typography variant="h5" sx={{ marginTop: 3 }}>Add Movie to DB</Typography>
            <TextField variant="outlined" placeholder='Name' onChange={(e) => setName1(e.target.value)} sx={{ margin: 1 }} />
            <TextField variant="outlined" placeholder='Rating' onChange={(e) => setRating(e.target.value)} sx={{ margin: 1 }} />
            <TextField variant="outlined" placeholder='Genre' onChange={(e) => setGenre(e.target.value)} sx={{ margin: 1 }} />
            <Button variant="contained" onClick={add} sx={{ margin: 1 }}>Add</Button>
            
            <Typography variant="h5" sx={{ marginTop: 3 }}>Delete</Typography>
            <TextField variant="outlined" placeholder='Movie Name' onChange={(e) => setName1(e.target.value)} sx={{ margin: 1 }} />
            <Button variant="contained" onClick={deleteMovie} sx={{ margin: 1 }}>Delete</Button>
            
            <Typography variant="h5" sx={{ marginTop: 3 }}>Update Movie</Typography>
            <TextField variant="outlined" placeholder='Name to be updated' onChange={(e) => setName1(e.target.value)} sx={{ margin: 1 }} />
            <TextField variant="outlined" placeholder='Updated Name' onChange={(e) => setName1(e.target.value)} sx={{ margin: 1 }} />
            <TextField variant="outlined" placeholder='Updated Rating' onChange={(e) => setRating(e.target.value)} sx={{ margin: 1 }} />
            <TextField variant="outlined" placeholder='Updated Genre' onChange={(e) => setGenre(e.target.value)} sx={{ margin: 1 }} />
            <Button variant="contained" onClick={update} sx={{ margin: 1 }}>Update</Button>

            <Typography variant="h6" sx={{ marginTop: 3, color: 'red' }}>{msg}</Typography>
        </div>
    );
};

export default Content;
