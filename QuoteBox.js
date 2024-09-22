import React, { useEffect, useState } from "react";

const QuoteBox = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quotes = [
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
        { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    ];

    const fetchQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex].text);
        setAuthor(quotes[randomIndex].author);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div id="quote-box" style={styles.wrapper}>
            <p id="text">{quote}</p>
            <p id="author">- {author}</p>
            <button id="new-quote" onClick={fetchQuote}>New Quote</button>
            <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Tweet Quote
            </a>
        </div>
    );
};

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    }
};

export default QuoteBox;