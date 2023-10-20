const quoteText = document.querySelector(".quote"),
    quotebtn = document.querySelector("button"),
    author = document.querySelector(".name"),
    sound = document.querySelector(".sound"),
    copy = document.querySelector(".copy"),
    twitter = document.querySelector(".twitter")

// Random quote function
async function randomQuote() {
    quotebtn.innerHTML = "Loading...."
    try {
        const res = await fetch("https://api.quotable.io/random")
        const quotes = await res.json()
        quoteText.innerHTML = quotes.content
        author.innerHTML = quotes.author
        quotebtn.innerHTML = "New Quote"
    }
    catch (err) {
        console.log(err)
    }
}

sound.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${author.innerHTML}`)
    speechSynthesis.speak(utterance)
})

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerHTML)
    .then(()=>{
        alert("Text copied")
    })
    .catch((err)=>{
        console.log(err)
    })
})

twitter.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`
    window.open(tweetUrl, "_blank")
})

quotebtn.addEventListener("click", randomQuote)