'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

const getBooksHandler = function(event) {
  event.preventDefault();
  libraryApi.getBooks().done(ui.onSuccess);
};

const getSingleBookHandler = function(event) {
  event.preventDefault();
  libraryApi.getBook().done(ui.onSingle);
};

const searchAllHandler = function(event) {
  event.preventDefault();
  libraryApi.getBooks().done(ui.searchAllSuccess);
}

// const getSingleBookHandler = function(event) {
//   event.preventDefault();
//   libraryApi.getBooks().done(ui.onSingleSuccess);
// }

// On document ready
$(() => {
  $('#get-books').on('click',getBooksHandler);
  $('#get-single-book').on('click',searchAllHandler);
  // $('#new-search').on('click',searchAllHandler);
});
