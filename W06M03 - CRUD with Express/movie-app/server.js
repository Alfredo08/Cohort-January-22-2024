const express = require('express');
const morgan = require('morgan');
const {uid} = require('uid');

const PORT = 8080;

const movieList = [{
    id : '1',
    title : 'The Godfather',
    director : 'Francis Copolla'
},
{
    id : '2',
    title : 'Lost in translation',
    director : 'Sofia Copolla'
}];

const app = express();
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));


app.listen(PORT, () => {
    console.log(`This server is running in port ${PORT}.`);
});

// http://localhost:8080/