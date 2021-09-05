// npm install 

const fs = require('fs');
const express = require('express');
const path = require('path');
const HTMLroutes = require('./routes/api.js');
const apiRoutes = require('./routes/api.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Use APPs
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(HTMLroutes);
app.use(apiRoutes);
app.listen(PORT, () =>{
    console.log(`API server now on ${PORT}!`);
});
