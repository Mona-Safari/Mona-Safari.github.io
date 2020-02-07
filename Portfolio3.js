var quotes =['Take it easy — but take it. ~Woody Guthrie',
                   'When you do things from your soul, you feel a river moving in you, a Joy. ~Rumi',
                   'Listen to silence, it has so much to say. ~Rumi',
                   'Build your own dreams, or someone else will hire you to build theirs. ~Farraj Gray',
                   'It is not the strongest of the species that survives, nor the most intelligent. It is the one that is most adaptable. ~Charles Darwin'
             ];

function newQuote(){
  var randomNumber= Math.floor(Math.random()*(quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
