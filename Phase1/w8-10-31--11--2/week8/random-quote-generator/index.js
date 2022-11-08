const quotes = 
[
    "Easier said than done", 
    "Life is what happens when you're busy making other plans.", 
    "The way to get started is to quit talking and begin doing", 
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Never let the fear of striking out keep you from playing the game."
];

function randomQuote()
{
    const rand = Math.floor(Math.random() * quotes.length);

    const quote = quotes[rand];
    console.log(rand);

    return quote; 
}

function randomizeMyQuotes()
{
    const quote = randomQuote();
    const quoteDiv = document.getElementById("quote");

    quoteDiv.innerHTML = quote;
}

function onBodyLoad()
{
    randomizeMyQuotes();
}

const quoteButton = document.getElementById("quoteGenerator");

quoteButton.addEventListener("click", function(){
    randomizeMyQuotes();
})
