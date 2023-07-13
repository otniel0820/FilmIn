import { movies } from "./data.js";

console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
    let allDirector = array.map((movie) => movie.director)
    let directorNoRepeat = [... new Set(allDirector)] // el objeto Set() permite almacenar valores unicos de cualquier tipo en este caso se le aplica a la variable allDirector que contiene el nuevo array solo con los directores, para que asi elimine los directores que estan repetidos y como set()devuelve un objeto usamos el spread para convertirlo en array con el constructor new ya que si no usamos el spread nos devolveria un objeto
    return directorNoRepeat
}
console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    let movieDrama = array.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return movieDrama
}

console.log(howManyMovies(movies));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(array) {
    let sumaScore = array.reduce((acc, movie) => acc + movie.score, 0);
    let promScore = sumaScore / array.length;
    return Number(promScore.toFixed(2));
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

// function dramaMoviesScore(array) {
//     let dramaMovies = array.reduce((acc, movie) => acc + movie.genre.includes('Drama'), 0);
//     let promDrama = dramaMovies / array.length;
//     return Number(promDrama.toFixed(2));
// }
// console.log(dramaMoviesScore(movies));

function dramaMoviesScore(array) {
    let dramaMovies = array.filter((movie) => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies)
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let orderMovie = array.slice();

    orderMovie.sort((movie1, movie2) => {
        if (movie1.year !== movie2.year) {
            return movie1.year - movie2.year
        }
        else {
            if (movie1.title < movie2.title) {
                return -1
            }
            else if (movie1.title > movie2.title) {
                return 1
            }
            else {
                return 0
            }
        }
    })
    return orderMovie
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let moviesCopyOrder = array.slice()

    moviesCopyOrder.sort((movie1, movie2) => {
        if (movie1.title < movie2.title) {
            return -1;
        } else if (movie1.title > movie2.title) {
            return 1;
        } else {
            return 0;
        }
    });
    let titles = moviesCopyOrder.map(movie => movie.title);
    let first20Titles = titles.slice(0, 20);

    return first20Titles;
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly score average - Best yearly score average

