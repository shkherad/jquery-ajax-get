'use strict';

const getBooks = function(){
  return $.ajax({
    url:'http://localhost:3000/books',
    method: 'GET',
  });
};

const getBook = function(){
  return $.ajax({
    url:'http://localhost:3000/books/'+$('#search-book').val(),
    method: 'GET',
  });
};

module.exports = {
  getBooks,
  getBook,
};
