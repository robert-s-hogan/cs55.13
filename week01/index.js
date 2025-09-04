// index.js
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/") {
    res.end(
      "Welcome to my Fantasy Football server!\n\n" +
        "Available routes:\n" +
        "  /joke     - Get a fantasy football joke\n" +
        "  /trophy   - See the champions trophy\n" +
        "  /waiver   - Check the waiver wire\n"
    );
  } else if (req.url === "/joke") {
    res.end(
      "Why did the fantasy football player bring a ladder to the draft? To reach the highest pick!"
    );
  } else if (req.url === "/trophy") {
    res.end("Congrats! You have discovered the champions trophy room!");
  } else if (req.url === "/waiver") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("The waiver wire is empty this week.  Better luck next time!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not routes found. Try /, /joke, /trophy, or /waiver.");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
