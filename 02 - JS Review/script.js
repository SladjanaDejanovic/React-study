/*
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//// Destructuring

const book = getBook(2);
book;

// const title = book.title;
// const author= book.author
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

// const primaryGengre = genres[0];
// const secondarygenre = genres[1];

// const [primaryGengre, secondarygenre] = genres;
// console.log(primaryGengre, secondarygenre);

/// Rest operator
const [primaryGengre, secondarygenre, ...otherGenres] = genres;
console.log(primaryGengre, secondarygenre, otherGenres);

/// Spread operator
const newGenres = [...genres, "epic fantasy"];
// const newGenres = ["epic fantasy", ...genres ];
newGenres;

const updateBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",
  // overwriting an existing property
  pages: 1210,
};
updateBook;

//// Template literals and ternary operators
const summary = `${title}, a ${pages}-page long book was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//// Arrow functions
// function declaration
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0]; // function expression
// when making arrow function with multiple line of code, use code block, and at the end return

console.log(getYear(publicationDate));

//// Short-circuiting and logical operator: &&, ||, ??
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, "", undefined, null
console.log("slady" && "Some string");
console.log(0 && "Some string");

// short circuiting happens when first value is true, so operator doesn't even look at a second value
console.log(true || "Some string");
console.log(false || "Some string");
console.log(book.translations.spanish);
const spanishTransaltion = book.translations.spanish || "NOT TRANSLATED";
spanishTransaltion;
const countWrong = book.reviews.librarything.reviewsCount || "no data"; // revCount for book with id 2 is 0
countWrong;

// nullish coalescing operator ?? (it will return second value when first value is false or undefined, but not when it's 0 or empty string)
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

//// Optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  // chain only continues if properties before ? aren't undefined, adn then we are setting default value in case it is undefined, so we won't get an error:
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
// good practice to use when we are not sure stracture of the data we are reciving
*/
/*
////  Array methods
//array functional methods (map, filter, reduce) don't mutate original array, instead tehy return new one

// map methods loops over array with operation applied to each element of that array
const books = getBooks();
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
})); //using ( before {} we are automathicaly returning
essentialData;

// filter method
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//reduce method
// to reduce entire array to one value
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// sort method
// is not a functional method, doesn't return new array, instead it mutates original array
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//// Imumtable arrays
// imumtable operations are when we're not manipulating data structure

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/
//// Async JS

// Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async/await

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
getTodos();
