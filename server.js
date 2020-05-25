var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var urlencodedParser = require('urlencoded-parser');
var path = require('path');
const router = express.Router();
var jade = require('jade');




app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//connection configurations to databse

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotelweb'
});

//router.get('/', function(req, res) {
//  res.sendFile(path.join(__dirname + '/index.html'));
//__dirname : It will resolve to your project folder.
//});


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
});


app.get('/booking', function(req, res) {
    res.render('booking');
});
app.post('/submit', urlencodedParser, function(req, res, next) {
    db.connect(function(err) {
        // if (err) throw err;
        console.log('database conencted');
        var sql = "INSERT INTO `roombooking`(`id`,`first_name`,`last_name`,`checkin_date`,`checkout_date`,`phone`,`email`,`roomType`,`adult`,`children`) VALUES ('" + null + "','" + req.body.firstName + "','" + req.body.lastName + "','" + req.body.checkInDate + "','" + req.body.checkOutDate + "','" + req.body.phone + "','" + req.body.email + "','" + req.body.roomType + "','" + req.body.adult + "','" + req.body.children + "')";
        db.query(sql, function(err, result) {
            if (err) throw err;
            console.log('table created');
            res.render('index')

        });
    });





});

//connect to database
db.connect();







app.use(express.static(__dirname + '/View'));
app.use('/', router);

//set port
app.listen(5000, function() {
    console.log('server started on port 5000');

});