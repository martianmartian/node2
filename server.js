var express = require ('express');
var app = express();

var port = process.env.PORT || 8082;

app.set('view engine',"ejs");

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/',function (req,res) {
  res.render('index');
})

app.listen(port,function(){
  console.log('Our app is running on http://localhost:' + port);
});

