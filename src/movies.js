
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(dir => {
        return dir.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenSpDrama = moviesArray.filter(movie => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie
        }
    })
    return stevenSpDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return moviesArray.length
    } else {
        let scores = []
        for (i = 0; i < moviesArray.length; i++) {
            if (!moviesArray[i].score) {
                scores.push(0)
            } else {
                scores.push(moviesArray[i].score)
            }
        }
        
        let result = scores.reduce((acc, number) => {
            acc += number
            return acc
        })

        let average = (result / scores.length).toFixed(2)
        return average*1
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovie = moviesArray.filter(movie => {
        if (movie.genre.includes("Drama")) {
            return movie
        }
    })
    if (dramaMovie.length === 0) {
        return 0
    } else {
        let dramaAverge = ((dramaMovie.reduce((sum, obj) => sum += obj.score, 0)) / dramaMovie.length).toFixed(2) * 1
        return dramaAverge
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesByYear = [...moviesArray]
    moviesByYear.sort((a, b) => { return a.year - b.year })
    

    return moviesByYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let title = [...moviesArray]
    title.sort((a, b) => {
        let titleA = a.title.toLowerCase()
        let titleB = b.title.toLowerCase()
        if (titleA < titleB) {
            return -1;
        } else
            if (titleA > titleB) {
                return 1;
            } else {
                return 0
            }
    })

    let justTitle = title.map(obj => {
        return obj.title
    })

    let firstTwenty = []
    for (let i = 0; (i < justTitle.length); i++) {
        if (i < 20) {
            firstTwenty.push(justTitle[i])
        }
    }
    return firstTwenty
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
