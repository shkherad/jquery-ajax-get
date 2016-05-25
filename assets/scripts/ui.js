'use strict';

const onSuccess = function (data){
  console.table(data.books);
};

const onSingle = function (data){
  $('p').text(data.book.title).append('<br>');
  $('p').append(data.book.author);
}

const onSingleSuccess = function (data) {
  console.table(data.books[$('#search-book').val()-1]);
}

const searchAllSuccess = function(data) {
  console.log(data.books[22].title);
  $('p').text('Sorry, try an new search');
  for( let i=0,max=data.books.length;i<max;i++){
  if(data.books[i].author == $('#search-book').val() || data.books[i].title == $('#search-book').val() || data.books[i].id == $('#search-book').val()){
    $('p').append('<br>');
    $('p').append(data.books[i].title).append('<br>');
    $('p').append(data.books[i].author).append('<br>');
  }
}
}


module.exports = {
  onSuccess,
  onSingleSuccess,
  onSingle,
  searchAllSuccess,
};
