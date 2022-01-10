const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 8000;


//STATIC FILES
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//SET VIEWS
app.set('views', __dirname+'/views');
app.engine('html', ejs.renderFile);


app.use('/portfolio', function( req, res ){
  res.render('portfolio.html');
})

app.use('/success', function (req, res){
  res.render('successful_send.html');
})

app.use('/contact', function( req, res){
  res.render('contact.html');
})

app.use('/', function (req, res){
  res.render('index.html')
})


app.listen( port,() => {
  console.log('Mi aplicación está corriendo en el puerto ' + port);
})
