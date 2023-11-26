"use strict";
// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
Object.defineProperty(exports, "__esModule", { value: true });
const dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
// function getProfit(movie: Movie): number{
//     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
// }
// function getProfit(movie: Movie): number {
//   const { grossWorldwide, budget } = movie.boxOffice;
//   return grossWorldwide - budget;
// }
function getProfit({ boxOffice: { grossWorldwide, budget } }) {
    return grossWorldwide - budget;
}
console.log(getProfit(dune));
console.log(getProfit(cats));
//# sourceMappingURL=objectsExerciseSOLUTION.js.map