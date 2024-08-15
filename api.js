const express =require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Movies = require('./models/movie.model.js');
const movieRoutes = require("./routes/movieRoutes.js");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
const JWT_SECRET = '84b53584844c8bb05716eb3553b707c8fced82a2024ad510fcac3d010f2b4172';
const users = [];
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      next();
    });
  };

  
app.get("/", (req, res) => {
    try{
        res.send({"message" : "Welcome to Movies API", "cookies" : req.cookies, "signed" : req.signedCookies});
    }
    catch(err){
        res.json({"message" : err});
    }
})

// user auth

app.get('/protected', authenticateJWT, (req, res) => {
    res.send('This is a protected route');
  });

app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    const ifExists = users.find(user => user.username === username);
    if(ifExists){
        return res.status(400).json({"message" : "user already exists!"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({username, password : hashedPassword});
    res.status(201).send('User registered');
})

app.post("/login" , async (req, res) => {
    const {username, password} = req.body;
    const user = users.find(user => user.username === username);
    if(!user){
        return res.status(400).send("Invalid username or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).send('Invalid username or password');
    }
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({"message": "successful", "token" : token });
})


app.use('/moviesapi', movieRoutes);

mongoose.connect("mongodb+srv://adithyaps929:adi123@apidb.axg7o.mongodb.net/?retryWrites=true&w=majority&appName=ApiDB")
.then(() => {
    console.log("Connected to the Database");
    app.listen(5000, () => {
        console.log("Connected to the Server")
    })
    
})
.catch(() => {
    console.log("Server Crashed...")
})