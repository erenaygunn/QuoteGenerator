const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      author: "Helen Keller"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
      author: "Michael Jordan"
    }
  ]

const quoteContainer = document.getElementById("quote-container");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNumber]
    quoteContainer.innerHTML = `<p>${randomQuote.quote}</p>
    <p id="author">- ${randomQuote.author}</p>`})
    