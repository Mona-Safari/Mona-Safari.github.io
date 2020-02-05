var quotes =['Take it easy — but take it. ~Woody Guthrie',
                   '',
                   '',
                   '',
                   '',
                   '',
                   '',
                   '',
                   ''];

function newQuote(){
  var randomNumber= Math.floor(Math.random()*(quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
