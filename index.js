const express = require("express");
const app = express();
const importDataPesawat = require("./dataPesawat.json")
const importDataHotel = require("./dataHotel.json")
let port = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hello World")
});

app.get("/dataPesawat", (req, res) => {
    res.send(importDataPesawat);
});

app.get("/dataHotel", (req,res)=> {
    res.send(importDataHotel);
})

app.listen(port, () => {
    console.log(`Sukses Berjalan Di PORT http://localhost:${port}`);
});