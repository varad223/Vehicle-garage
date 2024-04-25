const express = require('express');
const connectToMongoDb = require('./database');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const PORT = 4000

connectToMongoDb;

app.use('/auth', require('./routes/auth'));
app.use('/bookv', require('./routes/bookv'));
app.use('/books', require('./routes/books'));
app.use('/contact', require('./routes/contact'));

app.listen(PORT, ()=>{
    console.log('Server is running on Port ', PORT)
})