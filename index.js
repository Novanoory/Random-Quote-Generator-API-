let http = require("http")
let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs"
]

let server = http.createServer((req, res)=>{
    if (req.url === "/quotes") {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];

        res.writeHead(200, {"content-type" : "application/json"});
        res.end(JSON.stringify({
            quote : randomQuote
        }))
    }
})
server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})