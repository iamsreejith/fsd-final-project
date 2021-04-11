const express = require('express');
const GuestData = require('./src/model/guest.model');
const appoinmentModel = require('./src/model/appoinments')
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
const guestModel = require('./src/model/guest.model');
var app = new express();
app.use(cors());
app.use(express.json());
username='admin';
password='1234';



function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }






 app.post('/guest/insert',   function(req, res, next) {
  

  const firstNameVal = req.body.details.firstName;
  const guestIdVal = req.body.details.guestId;
  const lastNameVal = req.body.details.lastName;
  const emailAddressVal = req.body.details.emailAddress;
  const phoneNumberVal = req.body.details.phoneNumber;
  const dobVal = req.body.details.dob;


  let guestObj = new guestModel({

    firstName : firstNameVal,
    guestId: guestIdVal,
    lastName : lastNameVal,
    emailAddress : emailAddressVal,
    phoneNumber : phoneNumberVal,
    dob : dobVal

  });



  guestObj.save(function(err, guestObj){
    

    if(err){
      res.send({status: 500, message: 'Unable to add new Guest'});
    }
    else{
      res.send({status: 200, message: 'Added Sucessfully' , guestDetails: guestObj});
    }



  })
});




app.get('/guest',function(req,res){
    
  GuestData.find()
              .then(function(guests){
                  res.send(guests);
              });
});

app.get('/guest/view/:id', function(req, res, next) {

  // res.header("Access-Control-Allow-Origin", "*")
  // res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS',)

const userId = req.params.id

GuestData.findById(userId , function(err , guestResponse){

  if(err){
    res.send({status: 500, message: 'Unable to find the Guest'});
  }
  else{
    res.send({status: 200, results: guestResponse});
  }


})

});



app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

  //   app.put('/update',(req,res)=>{
  //     console.log(req.body)
  //     id=req.body._id,
  //     productId= req.body.productId,
  //     productName = req.body.productName,
  //     productCode = req.body.productCode,
  //     releaseDate = req.body.releaseDate,
  //     description = req.body.description,
  //     price = req.body.price,
  //     starRating = req.body.starRating,
  //     imageUrl = req.body.imageUrl
  //    ProductData.findByIdAndUpdate({"_id":id},
  //                                 {$set:{"productId":productId,
  //                                 "productName":productName,
  //                                 "productCode":productCode,
  //                                 "releaseDate":releaseDate,
  //                                 "description":description,
  //                                 "price":price,
  //                                 "starRating":starRating,
  //                                 "imageUrl":imageUrl}})
  //    .then(function(){
  //        res.send();
  //    })
  //  })


   app.put('/appoinments/update', (req,res)=>{
     idVal = req.body._id;
     oldstatus = req.body.status;
     newstat = "2";

     appoinmentModel.findByIdAndUpdate({"_id":idVal},
     {
       $set:{"status": newstat}
     }).then(function(){
       res.send();
     })
   })

   
   app.put('/guest/update',(req,res)=>{
    id=req.body.results._id,
    firstName= req.body.firstName,
    guestId = req.body.guestId,
    lastName = req.body.lastName,
    emailAddress = req.body.emailAddress,
    phoneNumber = req.body.phoneNumber,
    dob = req.body.dob
   GuestData.findByIdAndUpdate({"_id":id},
                                {$set:{"firstName":firstName,
                                "guestId":guestId,
                                "lastName":lastName,
                                "emailAddress":emailAddress,
                                "phoneNumber":phoneNumber,
                                "dob":dob
                              }})
   .then(function(){
       res.send();
   })
 })
   
app.delete('/guest/delete/:id',(req,res)=>{
   
     id = req.params.id;
     GuestData.findByIdAndDelete({"_id":id})
     .then(()=>{
         res.send();
     })
   })



  //  **************************************
  
  

  

 app.post('/appoinment/insert', function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*")
  // res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS',)


  const guestNameVal = req.body.details.guestName;
  const guestIdVal = req.body.details.guestId;
  const appoinmentVal = req.body.details.appoinmentID;
  const officerNameVal = req.body.details.officerName;
  const purposeVal = req.body.details.purpose;
  const appoinmentDateVal = req.body.details.appoinmentDate;
  const statusVal = req.body.details.status;


  let appoinmentObj = new appoinmentModel({
    guestName: guestNameVal,
    guestId: guestIdVal,
    appoinmentID: appoinmentVal,
    officerName : officerNameVal,
    purpose : purposeVal,
    appoinmentDate : appoinmentDateVal,
    status : statusVal,
  
  });



appoinmentObj.save(function(err, appoinmentObj){
  

  if(err){
    res.send({status: 500, message: 'Unable to add new Guest'});
  }
  else{
    res.send({status: 200, message: 'Added Sucessfully' , guestDetails: appoinmentObj});
  }



})
});




app.get('/appoinments',function(req,res){
    
  appoinmentModel.find()
              .then(function(appoinments){
                  res.send(appoinments);
              });
});


     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

