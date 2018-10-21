var express = require('express');
var consign = require('consign');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('public'));
consign().include('app/routes').into(app);

module.exports = app;

app.listen(3000, function(){
    console.log('Servidor on');
});