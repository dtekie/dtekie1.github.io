"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors, findIDs, addBook }; //add all of your function names here that you need for the node mocha tests

let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {
  /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

  const titles = findTitles();

  /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
  titles.sort();
  const titleString = titles.join("\n");

  let textArea = document.getElementById("displayArea");
  textArea.innerHTML = titleString;
}


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showAuthors() {
  /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

  const authors = findAuthors();

  /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
  authors.sort();
  const authorString = authors.join("\n");

  let textArea = document.getElementById("displayArea");
  textArea.innerHTML = authorString;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showID() {
  /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

  const libraryID = findIDs();

  /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
  libraryID.sort();
  const libraryIDString = libraryID.join("\n");

  let textArea = document.getElementById("displayArea");
  textArea.innerHTML = libraryIDString;
}

/**
 *
 * @return {object} array holding all titles as elements
 */
function findTitles() {
  let titles = [];
  //titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
  // implement this and other functions
  for (let book of libraryBooks) {
    for (let key in book) {
      if (key === "title") {
        titles.push(book[key]);
      }
    }
  }
  return titles;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
/**
 * @param {string} title -title of the book
 * @param {string} author -author of the book
 * @param {string} ids -Id of the book
 * @returns {object} this returns a book object
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(title, author, ids) {
  title = document.getElementById("title"); //retrieves the book title from the title textbox
  author = document.getElementById("author"); //retrieves the book author from the author textbox
  ids = document.getElementById("libraryID"); //retrieves the book libraryIDs from the libraryId textbox
  //finish the implementation -- get the author, create a book object, and add to the library array
  let newBook = { title: title, author: author, libraryID: ids };
  libraryBooks.push(newBook);
  return newBook;
}

/**
 *
 *
 * @returns {Array} array of authors of the book
 */
function findAuthors() {
  let authors = [];
  for (let book of libraryBooks) {
    for (let key in book) {
      if (key === "author") {
        authors.push(book[key]);
      }
    }
  }
  return authors;
}

/**
 *
 *
 * @returns {Array} array of ids of library books
 */
function findIDs() {
  let ids = [];
  for (let book of libraryBooks) {
    for (let key in book) {
      if (key === "libraryID") {
        ids.push(book[key]);
      }
    }
  }
  return ids;
}
