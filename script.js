lincoln = {
  source: "Abraham Lincoln",
  quote: "Always bear in mind that your own resolution to succeed is more important than any other."  
};
obama = {
  source: "Barack Obama",
  quote: "The future rewards those who press on."
};
ali = {
  source: "Muhammad Ali",
  quote: "He who is not courageous enough to take risks will accomplish nothing in life."
};
gretzky = {
  source: "Wayne Gretzky",
  quote: "You miss 100 percent of the shots you don't take."
};
hawking = {
  source: "Stephen Hawking",
  quote: "Intelligence is the ability to adapt to change."
};
angelou = {
  source: "Maya Angelou",
  quote: "We may encounter many defeats but we must not be defeated."
};

$(document).ready(function() {
  randomQuote = 
    Math.floor(Math.random() * 6);
    
  switch(randomQuote) {
/* LINCOLN */
    case 0:
      randomQuote = lincoln.quote;
      quoteSource = lincoln.source;
      break;
/* OBAMA */  
    case 1:
      randomQuote = obama.quote;
      quoteSource = obama.source;
      break;
/* ALI */
    case 2:
      randomQuote = ali.quote;
      quoteSource = ali.source;
      break;
/* GRETZKY */  
    case 3:
      randomQuote = gretzky.quote;
      quoteSource = gretzky.source;
      break;
/* HAWKING */  
    case 4:
      randomQuote = hawking.quote;
      quoteSource = hawking.source;
      break;
/* ANGELOU */  
    case 5:
      randomQuote = angelou.quote;
      quoteSource = angelou.source;
      break; 
/* DEFAULT */
    default:
      break;
  }
  
  $("#quote").html('"' + randomQuote + '"');
  $("#quote-source").html('- ' + quoteSource + ' -');
  
  randomColor = 
    Math.floor(Math.random() * 4);
    
  switch(randomColor) {
/* BLUE */
    case 0:
      randomColor = "#1a0954";
      break;
/* RED */
    case 1:
      randomColor = "#700d29";
      break;
/* GREEN */  
    case 2:
      randomColor = "#094c38";
      break;
/* ORANGE */
    case 3:
      randomColor = "#d86822";
      break;
/* DEFAULT */
    default:
      break;
  }

  $("body").css("background-color", "" + randomColor);
  $("button").css("background-color", "" + randomColor);
  $("#quote").css("color", "" + randomColor);
  $("#quote-source").css("color", "" + randomColor);
  $(".fa-twitter-square").css("color", "" + randomColor);
  
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + randomQuote + '" - ' + quoteSource));
  
  $("#tweet-quote").on("click", function() {
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + randomQuote + '" ' + quoteSource));
  });
  
/* ON CLICK STARTS BELOW */    
  $("button").on("click", function() {
    randomColor = 
      Math.floor(Math.random() * 4);
    
    switch(randomColor) {
/* BLUE */
      case 0:
        randomColor = "#1a0954";
        break;
/* RED */
      case 1:
        randomColor = "#700d29";
        break;
/* GREEN */  
      case 2:
        randomColor = "#094c38";
        break;
/* ORANGE */
      case 3:
        randomColor = "#d86822";
        break;
/* DEFAULT */
      default:
        break;
    }

    $("body").css("background-color", "" + randomColor);
    $("button").css("background-color", "" + randomColor);
    $("#quote").css("color", "" + randomColor);
    $("#quote-source").css("color", "" + randomColor);
    $(".fa-twitter-square").css("color", "" + randomColor);
    
    randomQuote = 
      Math.floor(Math.random() * 6);
    
    switch(randomQuote) {
/* LINCOLN */
      case 0:
        randomQuote = lincoln.quote;
        quoteSource = lincoln.source;
        break;
/* OBAMA */  
      case 1:
        randomQuote = obama.quote;
        quoteSource = obama.source;
        break;
/* ALI */
      case 2:
        randomQuote = ali.quote;
        quoteSource = ali.source;
        break;
/* GRETZKY */  
      case 3:
        randomQuote = gretzky.quote;
        quoteSource = gretzky.source;
        break;
/* HAWKING */  
      case 4:
        randomQuote = hawking.quote;
        quoteSource = hawking.source;
        break;
/* ANGELOU */  
      case 5:
        randomQuote = angelou.quote;
        quoteSource = angelou.source;
        break;  
/* DEFAULT */
      default:
        break;
    }
    
    $("#main-container").fadeOut(600);
    
    setTimeout(
      function() {
        $("#main-container").fadeIn();
        $("#quote").html('"' + randomQuote + '"');
        $("#quote-source").html('- ' + quoteSource + ' -'); 
      }, 600); 
    
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + randomQuote + '" - ' + quoteSource));

    $("#tweet-quote").on("click", function() {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + randomQuote + '" ' + quoteSource));
    });    
  });
});
