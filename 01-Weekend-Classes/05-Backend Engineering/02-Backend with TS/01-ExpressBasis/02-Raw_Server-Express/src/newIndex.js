const express = require('express'); // <<-- CommonJs
// import express from "express" <<-- ManualJs

// Web-Server by Express
const app = express();

app.use(express.json()); // accept all .json type files

// "GET" Rount handel
app.get("/menu", getHandler);
// "POST" Rount handel
app.post('/order', postHandler);

// -- Handler
const getHandler = ( req, res ) => res.json ({
    items: ['thail', 'biryani']
});

const postHandler = (req, res) => {
    res.status(200).json({
        status: "received",
        order: req.body
    })
};

// ⚠️ Code is same as Raw-server/Index.js
