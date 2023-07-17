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

let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));

console.log(scoresAverage(dramaMovies));



// function dramaMoviesScore(array) {
//     let dramaMovies = array.filter((movie) => movie.genre.includes('Drama'));
//     return scoresAverage(dramaMovies)
// }
// console.log(dramaMoviesScore(movies));

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



function convertDurationToMinutes(duration) {
    const timeParts = duration.split(' ');//aqui estoy devolviendo la duracion de las peliculas en un array separando como dos elementos cuando se produce el espacio entre horas y minutos 
    let totalMinutes = 0; // esta variable es la que me almacena la suma de los minutos totales 
    for (let i of timeParts) { // este bucle va a analizar cada array de duracion que se crea nuevo en la variable timeParts
        if (i.includes('h')) { // aqui le creamos una condicional de que si i include el h entonces se ejecute ese if
            const hours = parseInt(i, 10); // que vendria siendo este el cual creamos una constante llamada hours que va a hacer la conversion del string a numeros trabajando con el sistema de numeros decimal por eso del 10
            totalMinutes += hours * 60; // luego a la variable totalMinutes le sumanos el valor de la variable hours multiplicado por 60 que en este caso es la cantidad de minutos que contiene una hora 
        } else if (i.includes('min')) { // luego en el else if le damos la condicion de que si incluye min se ejecute el siguiente codigo
            const minutes = parseInt(i, 10); // este codigo hace lo mismo que el codigo del if pero en este caso sumando los minutos que se nos da no se hace conversion porque el valor que se nos da ya viene reflejado en minutos 
            totalMinutes += minutes;
        }
    }

    return totalMinutes; // por ultimo retornamos la variable totalMinutes
}// esta funcion la creamos para poder hacer la conversion de horas a minutos y luego sumar esos minutos a los minutos que ya tenemos


function turnHoursToMinutes(array) {
    const updatedMovies = array.map(movie => {//en esta funcion que es la principal creamos una constamte que mapee el array de movies y nos devuelva un nuevo array luego con una arrow funtion 
        const updatedDuration = convertDurationToMinutes(movie.duration); // le declaramso otra cosntante que es updatedDuration la cual invocamos a la funcion que creamos anteriormente y como parametros le damos movie,duration que seria para acceder a la duracion de las peluclas en el objeto
        return {
            ...movie, //luego usamos spread opeator para concatenar la actualizacion de la duracion a nuestro parametro movie que seria nuestro nuevo array principal 
            duration: updatedDuration
        };
    });

    return updatedMovies;// aqui retornamos la constante updatedMovies y cuando logueemos la funcion nos dara el resultado que esperamos 
}

console.log(turnHoursToMinutes(movies));
// BONUS - Iteration 8: Best yearly score average - Best yearly score average

// function bestYearAvg(array) {

//     const yearScores = {};
//     for (let i = 0; i < array.length; i++) {
//         const movie = array[i];
//         if (yearScores[movie.year]) {
//             yearScores[movie.year].sum += movie.score;
//             yearScores[movie.year].count += 1;
//         } else {
//             yearScores[movie.year] = { sum: movie.score, count: 1 };
//         }
//     }
    
//     let bestYear = null;
//     let bestAvg = -Infinity;
//     for (const j in yearScores) {
//         const avg = yearScores[j].sum / yearScores[j].count;
//         if (avg > bestAvg) {
//             bestYear = j;
//             bestAvg = avg;
//         }
//     }
//     return `The best year was ${bestYear} with an average score of ${bestAvg}`;
// }
// console.log(bestYearAvg(movies));

function bestYearAvg(array) {
   
    const yearScores = array.reduce((accumulator, movie) => {
      if (accumulator[movie.year]) {
        accumulator[movie.year].sum += movie.score;
        accumulator[movie.year].count += 1;
      } else {
        accumulator[movie.year] = { sum: movie.score, count: 1 };
      }
      return accumulator;
    });
  
    let bestYear;
    let bestAvg = -Infinity;
  
    Object.keys(yearScores).forEach(year => {
      const avg = yearScores[year].sum / yearScores[year].count;
      if (avg > bestAvg) {
        bestAvg = avg;
        bestYear = year;
      }
    });
  
    return `El mejor año fue ${bestYear} con una puntuación promedio de ${bestAvg.toFixed(2)}`;
  }

  console.log(bestYearAvg(movies));