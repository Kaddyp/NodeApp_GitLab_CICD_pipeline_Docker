var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('Deploy NodeJS application CICD pipeline using docker image.');
});

app.get('/home', (req, res) =>{
    res.send('Docker Image');
});

app.get('/works', (req, res) =>{
    res.send('Great!, It works!');
});
app.listen(process.env.PORT || 3000);
//module.exports = app;