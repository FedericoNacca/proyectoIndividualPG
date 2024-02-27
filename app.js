const express = require("express");
const app = express();

const path = require("path");
const publicPath = path.resolve(__dirname, "./public"); 
app.use(express.static(publicPath));  //Metodo use se ejecuta sobre la variable app


app.listen(3000, () => {
    console.log("El servidor corre en el puerto 3000")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"))
})
