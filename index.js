$(document).ready(function() {
  var quote;
  var author;
  getQuote(); //Gets quote as soon as page is loaded
  function getQuote() {
    var api = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    
    $.getJSON(api, function(data) {
      quote = data.quoteText;
      author = data.quoteAuthor;
      if (author == "") {
        author = "Unknown";
      }
      
      $("#getQuote").html('"' + quote + '"'); //Puts quote from api in blockquote element
      $("#getAuthor").html(author); //Puts author for quote in footer
    });
  };
  
  $("#newQuote").on("click", function() {
    getQuote();
  });
  
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + quote + "-" + author);
  });
});
