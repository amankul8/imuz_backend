const express = require('express');
const router = require("./config/routes");
const app = express();
const appConfig = require("./config/app");
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

async function startApp() {
    const url = "mongodb+srv://root:root@cluster0.wky2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    try {
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(appConfig.port, () => console.log('SERVER STARTED ON PORT: '+appConfig.port));
    } catch (e) {
        console.log(e);
    }
}

startApp();