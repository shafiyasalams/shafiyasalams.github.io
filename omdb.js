function runThatQuery() {
  console.log ("This runThatQuery function was working");
  var baseUrl = "https://www.omdbapi.com/?"; 
  var searchQuery = $( "#movieTitleID" ).val();
  var myapikey = "7f6405e4";
  var moviesSearchUrl = baseUrl + 'apikey=' + myapikey;
  $.ajax({
    url: moviesSearchUrl + '&s=' + encodeURI(searchQuery),
    dataType: "jsonp",
    success: searchCallback,
  });
  // callback for when we get back the results
  function searchCallback(data) {
    console.log("Ajax found some results");  
    console.log (JSON.stringify(data));
    $("#movieForm").html('<h3>Data founded : ' + data.totalResults);
    var movies = data.Search;
    $.each(movies, function(index, movie) {
    $("#movieForm").append('<h6>' + movie.Title + '</h6>');
    $("#movieForm").append('<img src="' + movie.Poster + '" size=20%">');
    $("#movieForm").append('<br> Year: ' + movie.Year+ '<br></tr>');
      
    if (movie.Year >= 2002){ $("#movieForm").append('Which is pretty recent<BR>');}
    });
  }
}
