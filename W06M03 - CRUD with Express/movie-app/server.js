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

// CRUD -> Read
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/movies', (req, res) => {
    const templateVars = {
        movieList: movieList
    }
    res.render('movies', templateVars);
});

app.get('/api/movie/form', (req, res) => {
    console.log("Entering this route to load the form");
    res.render('new-movie');
});

app.get('/api/movie/:movieId', (req, res) => {
    const movieId = req.params.movieId;

    const foundMovie = movieList.find((movie) => {
        if(movie.id === movieId){
            return movie;
        }
    });
    const templateVars = {
        movie: foundMovie
    }
    res.render('movie-detail', templateVars);
});

app.get('/api/movie/edit/:movieId', (req, res) => {
    const movieId = req.params.movieId;

    const foundMovie = movieList.find((movie) => {
        if(movie.id === movieId){
            return movie;
        }
    });
    const templateVars = {
        movie: foundMovie
    }

    res.render('edit-movie', templateVars);
});

// CRUD -> Create
app.post('/api/movie/new', (req, res) => {
    const title = req.body.title;
    const director = req.body.director;
    const id = uid(3);
    const newMovie = {
        title,
        director,
        id
    };
    movieList.push(newMovie);
    console.log(movieList);
    // When doing a redirect we always specify a GET route
    res.redirect('/api/movies');
});

// CRUD -> Update (Need to use POST because the <form> doesn't allows us to send PUT)
app.post('/api/movie/edit/:movieId', (req, res) => {
    const title = req.body.title;
    const director = req.body.director;
    const movieId = req.params.movieId;

    for(let i = 0; i < movieList.length; i ++ ){
        if(movieList[i].id === movieId){
            movieList[i].title = title;
            movieList[i].director = director;
        }
    }
    res.redirect('/api/movies');
});

// CRUD -> DELETE (Need to use POST because the <form> doesn't allows us to send DELETE)
app.post('/api/movie/delete/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const movieIndex = movieList.findIndex((movie, index) => {
        if(movie.id === movieId){
            return index;
        }
    });

    movieList.splice(movieIndex, 1);
    res.redirect('/api/movies');
});

app.listen(PORT, () => {
    console.log(`This server is running in port ${PORT}.`);
});

// http://localhost:8080/