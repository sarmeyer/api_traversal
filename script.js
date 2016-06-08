$(document).ready(function(){
  $('#submit').on('click',function(){
    var input = $('#userInput').val();
    $.get('http://www.omdbapi.com/?s=' + input, function(data, status){
      var movieArr = data.Search;
      var alternate = '/mockups/images/no_image.png';
      console.log(alternate);
      movieArr.forEach(function(movie){
        $('#center_column').append('<p>' + movie.Title + '</p>' + '<img class="movie_poster" src=' + movie.Poster + '>');
        // $('.movie_poster').each(function(){
        //     $(this).attr('alt', 'src=mockups/images/no_image.png');
        // });
      })
    })
  })
})
