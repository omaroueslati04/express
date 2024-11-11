const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");
const { checkWorkingHours } = require("./date.js");

app.use(checkWorkingHours);


app.get('/acceuil', (req, res) => {
    fs.readFile("index1.html", "utf-8",(err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erreur lors du chargement de la page.");
        }
        res.send(data); 
    });
});

app.get('/nos-services', (req, res) => {
    fs.readFile("index2.html","utf-8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erreur lors du chargement de la page.");
        }
        res.send(data); 
    });
});

app.get('/nous-contacter', (req, res) => {
    fs.readFile("index3.html", "utf-8",(err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erreur lors du chargement de la page.");
        }
        res.send(data); 
    });
});

app.listen(port, () => {
    console.log(`Serveur connecté sur le port ${port}`);
});
