const http = require("http");


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("<h1>I am Aryan Gaikwad. MERN Stack Dev</h1>");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
     console.log(`🔥 Listening on PORT ${PORT}`);
})