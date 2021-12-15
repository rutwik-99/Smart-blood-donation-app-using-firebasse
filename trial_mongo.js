const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongo = require('mongodb'); 
var router = express.Router();
var session = require('express-session');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

const cors = require('cors');
const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100'
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8100"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  }
}

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res, next) => {
  res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
});



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


var fruits = ["mango", "orange", "apple", "pomegranate"];
var some = "edfasef";
console.log(fruits);
// console.log(some);


app.get('/',(req,res)=> {
  res.send('getting root');
});

app.get('/profile',(req,res)=> {
  res.send('Getting profile');
});

app.post('/donor_reg',(req,res)=> {

  var name = req.body.name;
  var age =req.body.age;
  var phone_number =req.body.phone_number;
  var email =req.body.email;
  var first_donation =req.body.first_donation;
  var last_b_date =req.body.last_b_date;
  var diseases =req.body.diseases;
  var blood_group =req.body.blood_group;
  var home_add =req.body.home_add;
  var office_add =req.body.office_add;
  var password = req.body.password;
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;

  console.log(req.body)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name:req.body.name, age:req.body.age, phone_number:req.body.phone_number, email:req.body.email, first_donation:req.body.first_donation, last_b_date:req.body.last_b_date, diseases:req.body.diseases, blood_group: req.body.blood_group, home_add:req.body.home_add, office_add:req.body.office_add, password:req.body.password, latitude:req.body.latitude, longitude:req.body.longitude };
    dbo.collection("donors").insertOne(myobj, function(err, res) {
      if (err) throw err;
    
      console.log("1 record inserted");
    });
  });


  
  res.send('Success');
});


app.post('/patient_reg',(req,res)=> {
  
  var name = req.body.name;
  var age =req.body.age;
  var phone_number =req.body.phone_number;
  var blood_group =req.body.blood_group;
  var diseases =req.body.diseases;
  var mediator_required = req.mediator_req;
  var med_name = req.body.med_name;
  var med_phone_number = req.body.med_phone_number;
  var med_email = req.body.med_email;
  var home_add =req.body.home_add;
  var clinic_add =req.body.clinic_add;
  var password = req.body.password;
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;

  console.log(req.body)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name:req.body.name, age:req.body.age, phone_number:req.body.phone_number, blood_group: req.body.blood_group, diseases:req.body.diseases,mediator_required:req.body.mediator_required, med_name:req.body.med_name, med_phone_number:req.body.med_phone_number, med_email:req.body.med_email, home_add:req.body.home_add, clinic_add:req.body.clinic_add, password:req.body.password, latitude:req.body.latitude, longitude:req.body.longitude };
    dbo.collection("patients").insertOne(myobj, function(err, res) {
      if (err) throw err;
    
      console.log("1 record inserted");
    });
  });


  
  res.send('Success');
});

app.post('/test',(req,res)=> {
  console.log(req.body);
  
  res.send('Success');
});


app.post('/login', function(req, res) {
  var name = req.body.name;
  var password = req.body.password;
  if (name && password) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("donors").find( { $and: [{name:req.body.name, password:req.body.password}] }).toArray(function(err, results) {
        if (err) throw err;
        console.log(results);
        db.close();
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.name = name;
        res.json(results);
        // res.send('Logged in Successfully');
      } else {
        res.send('Incorrect email,name and/or Password!');
      }     
      res.end();
    });
    });
  } else {
    res.send('Please enter Username ,email and Password!');
    res.end();
  }
});

app.listen(3000);