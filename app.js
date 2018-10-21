var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

var port = process.env.PORT || 8080;
app.listen(port);

app.get('/', function(req, res){
    res.render('index.ejs')
});
