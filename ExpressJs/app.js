import express from "express";
import { PORT } from "./env.js"
import path from "path";

const app = express();


// Absolute Path
// const staticPath = path.join(import.meta.dirname, "public");
// app.use("/public", express.static(staticPath))


// Handle Form Submit
// const staticPath = path.join(import.meta.dirname, "public");
// app.use(express.static(staticPath))
// app.get("/contact", (req, res) => {
//     console.log(req.query);
//     res.redirect("/")
// });
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath))
app.use(express.urlencoded({extend:true}))
app.post("/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/")
});

// Query Parametres
app.get("/product", (req, res) => {
    console.log(req.query);
    res.send(`<h1>user search for product ${req.query.search}</h1>`)
});
// Multiple Query parameters
app.get("/product", (req, res) => {
    console.log(req.query);
    res.send(`<h1>user search for product ${req.query.page} ${req.query.limit} this </h1>`)
});

// Routes Parameters
app.get("/profile/:username", (req, res) => {
    console.log(req.params);
    res.send(`<h1>welcome ${req.params.username} </h1>`);
});
app.get('/profile/:username/article/:slug', (req, res) => {
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`<h1> Article ${req.params.username} by ${formatedSlug} </h1>`);
});
// app.get('/profile/:username/article/:slug', (req, res) => {
//   console.log(req.params);
//   // Logic to fetch article
//   res.send(`<h1> Article ${req.params.username} by ${req.params.slug} </h1>`);
// });


// app.use(express.static("public")) //there are only one line to connect html css & other files but only includ public folder

app.get("/", (req, res) => res.send("hello World!"));

// app.get("/", (req, res) => {


//     // console.log(__dirname);
//     // console.log(__filename);

//     // console.log(import.meta.dirname); ******es modules
//     //  console.log(import.meta.url);

//     // const __filename = new URL(import.meta.url).pathname;
//     // console.log(__filename);

//     // res.send("<h1>hiii aryan</h1>")


//     const homePagePath = path.join(import.meta.dirname, "public", "index.html");
//     res.sendFile(homePagePath);

// });
// 404File

app.use((req, res) => {
    // return res.status(404).send("<h1> 404 Page PAge NOt Found </h1>");
    return res.status(404).sendFile(path.join(import.meta.dirname, "Views", "404.html"));
});

// const PORT = 3000;
// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})

