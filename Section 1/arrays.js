const arr = [ 6834, 'nice', true, null ];

console.log(arr);

const movies = [ 'Ice Age', 'Jeene nhi doonga', 'Kaliya', 'Hunger Games', 'Batman', 'Mirzapur'];

console.log(movies.length);
const myMovie = 'Animal';
console.log(myMovie.length);

// indexing
console.log(movies[3]);
console.log(movies[5]);
console.log(movies.at(-1) );
console.log(movies[56]);
console.log( movies.indexOf('Kaliya') );

// slicing
console.log( movies.slice(1, 5) );
console.log( movies.slice(3) );
console.log( movies.slice(2, 50) );

// adding new element
movies.push('The Dark Knight'); // adds element at the end 
movies.unshift('The Nun'); // adds element at the beginning

console.log(movies);

// removing element
movies.pop(); // removes element from the end
movies.shift(); // removes element from the beginning

console.log(movies);

// adding and removing element from specific position

movies.splice(-2, 0, 'Superman', 'Flash');

console.log(movies);

