const express = require("express");
const app = express();
const importDataPesawat = require("./dataPesawat.json")
const importDataHotel = require("./dataHotel.json")
const importDataKapal = require("./dataKapal.json")
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

app.get("/dataKapal", (req,res)=> {
    res.send(importDataKapal);
})

app.listen(port, () => {
    console.log(`Sukses Berjalan Di PORT http://localhost:${port}`);
});