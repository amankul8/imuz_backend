const express = require('express');
const router = require("./config/routes");
const app = express();
const config = require("./config/app");
const mongoose = require("mongoose");

const corsMiddleware = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // you can optionally replace * with your server address
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    next();
};

app.all("*", corsMiddleware);
app.use(express.json());
app.use(express.static(__dirname+'public'));
app.use("/imuz", router);
app.use("", (request, response)=>{
    response.send("Error 404");
});

app.listen(config.port, () => console.log('SERVER STARTED ON PORT: '+config.port));