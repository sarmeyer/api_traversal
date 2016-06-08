$(document).ready(function(){
  $('#submit').on('click',function(){
    var input = $('#userInput').val();
    $.get('http://www.omdbapi.com/?s=' + input, function(data, status){
      var movieArr = data.Search;
      movieArr.forEach(function(movie){
        $('#center_column').append('<p>' + movie.Title + '<img class="movie_poster" src=' + movie.Poster + '></p>');
      })
      console.log(movieArr);
    })
  })
})
