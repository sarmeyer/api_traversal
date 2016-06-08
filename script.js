$(document).ready(function(){
  $('#submit').on('click',function(){
    var input = $('#userInput').val();
    $.get('http://www.omdbapi.com/?s=' + input, function(data, status){
      var movieArr = data.Search;
      var alternate = './mockups/images/no_image.png'
      movieArr.forEach(function(movie){
        console.log(movie.Poster);
        if (movie.Poster === 'N/A') {
            $('#center_column').append('<p>' + movie.Title + '</p><img class="movie_poster" src=' + alternate + '>');
        } else {
        $('#center_column').append('<p>' + movie.Title + '</p><img class="movie_poster" src=' + movie.Poster + '>');
        }
      })
    })
  })
})
