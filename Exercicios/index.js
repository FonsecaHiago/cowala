const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const fibonacci = require("./atividade1/fibonacci");

const hostnamme = '127.0.0.1';
const port = 3000;


//View engine
app.set("view engine", "ejs");

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.render("index");
})

app.use("/", fibonacci);


app.listen(8080, () => {
    console.log("Server is connected");
})
