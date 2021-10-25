const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => `${movie.director}` );
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director == director);
  console.log("EXERCICE 2 ->", result);
  return result;
 
}

/* Funcion adicional indicada en el enunciado del ejercicio 6 */

function moviesAverage(array) {
   
  let vacio = 0;
  let averages = array
    .map(movie => {

      if (movie.score == 0) {
        vacio++;
      }
      
      return movie.score
    })
    .reduce((a, b) => a + b);

    let result = parseFloat((averages / ([...array].length-vacio)).toFixed(2));
    
    return result;
}
  
// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(array, director) {

  let peliculas = getMoviesFromDirector(array, director);

  let result = moviesAverage(peliculas);
  
  console.log("EXERCICE 3 ->", result);

  return result;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let nombre = array
    .map(pelicula => pelicula.title)
    .sort((one, two) => one > two ? 1 : -1);
  
  return nombre.slice(0, 20);

}


// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let years = array.sort((uno, dos) => {

    if (uno.year > dos.year) {

      return 1;

    }else if (uno.year < dos.year) {

      return -1;
    } else {

      return uno.title > dos.title ? 1 : -1;
    };

});
 
  return years.slice(0, 20);

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, categoria) {

  const peliculas = array.filter(pelicula => pelicula.genre.includes(categoria));

  let result = moviesAverage(peliculas);
  
  return result;
  };
    

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  /* let peliculas = array.map(pelicula => {
    
    let totalMinutos = 0;
    let str = pelicula.duration;
    if (/\s/.test(str)) {
      let horMin = str.slice(0, -3);
      let [horas, minutos] = horMin.split('h ');
      totalMinutos = parseInt(horas) * 60 + parseInt(minutos);
      
    } else if (/h$/.test(str)) {
      totalMinutos = parseInt(str) * 60;
    } else {
      totalMinutos = parseInt(str);
    }

    pelicula.duration = totalMinutos;
    console.log(pelicula)
    return pelicula;
  });
  console.log(peliculas);
  return peliculas; */

  let peliculas = array.map(pelicula => {
    
    let totalMinutos = 0;
    let str = pelicula.duration;
    if (/\s/.test(str)) {
      let horMin = str.slice(0, -3);
      let [horas, minutos] = horMin.split('h ');
      totalMinutos = parseInt(horas) * 60 + parseInt(minutos);
      
    } else if (/h$/.test(str)) {
      totalMinutos = parseInt(str) * 60;
    } else {
      totalMinutos = parseInt(str);
    }

    pelicula.duration = totalMinutos;
    return pelicula;
  })
  .sort((a, b) => a.duration < b.duration ? 1 : -1);
  
  console.log(peliculas);
  return peliculas;
    
};


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let sameYear = array
    .filter(pelicula => pelicula.year == year)
    .sort((a, b) => a.score < b.score?1:-1);

  let mejor = sameYear[0];

  let mejores = sameYear.filter(ord => ord.score == mejor.score);

  return mejores;
        
  }


  




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
