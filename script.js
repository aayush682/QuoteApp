const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQ = document.getElementById('newQ');
const tweetMe = document.getElementById('tweetMe');
let realData = "";
let quote = ""

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quote.text}`
    window.open(tweetPost, '_blank');
}

const getNewQuotes = () => {
    quote = realData[Math.floor(Math.random() * realData.length)];
    quotes.innerHTML = quote.text
    author.innerHTML = quote.author
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes"
    try {
        let data = await fetch(api)
        realData = await data.json()
        console.log(realData)
        getNewQuotes();
    } catch (error) {
        console.log(error.message);
    }
}

tweetMe.addEventListener("click", tweetNow)
newQ.addEventListener("click", getNewQuotes)
getQuotes();