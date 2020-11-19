const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models")

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sequelize application." }
  );
});

const router = require('./router/route')
app.use('',router) 

// set port, listen for requests
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});












// const express = require('express');
// const Sequelize = require('sequelize');
// var bodyParser = require('body-parser')
// // const Data = require('./data');
// const app = express();
// const port = 8001;

// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// const dbConfig = require("./config/database");

// const dataRoute = require('./router/route')
// // const {Artical} = require('./models/artical')


// const connection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   dialect: dbConfig.dialect
// })

// app.use('/api',dataRoute)

// // var Artical = connection.define('artical', {
// //   title: Sequelize.STRING,
// //   body: Sequelize.TEXT
// // });

// var Exam = connection.define('exam', {
//   subject : Sequelize.STRING,
//    marks: Sequelize.NUMBER,
//    TotalMarks : Sequelize.NUMBER,
// });

// connection
//   .sync({
//     logging: console.log,
//     force: false
//   })
//   .then(() => {
//     console.log('Connection to database established successfully.');
//     app.listen(port, () => {
//       console.log('Running server on port ' + port);
//       // app.use('', dataRoute);

//     });
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });



// app.post('/test', function (req, res) {
//   return Artical.create({
//     title: req.body.title,
//     body: req.body.body
//   }).then(function (users) {
//     if (users) {
//       res.send(users);
//     } else {
//       res.status(400).send('Error in insert new record');
//     }
//   });
// });

// app.get('/all', function(req, res){
//   return Artical.findAll().then(data => {
//     // console.log(data)
//     res.send(data)
//   })
// })

// app.get('/findone/:id', function(req, res){
//   const id = req.params.id
//   return Artical.findByPk(id).then(data => {
//     res.send(data)
//   })
// })

// app.post('/update/:id', function(req, res){
//   const id = req.params.id
//   return Artical.update({title: req.body.title,
//     body: req.body.body}, {where :{id : id}}).then(data => {
//     res.send(data)
//   })

// })

// app.post('/remove/:id', function(req, res){
//   const id = req.params.id
//   return Artical.destroy({
//     where: { id: id }
//   }).then(data => {
//     res.send("deleted !!!")
//   })

// })