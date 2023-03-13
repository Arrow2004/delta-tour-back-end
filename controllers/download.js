const path = require('path');
const generateCard = require('../pdfCreator/index');
const fs = require('fs')
const Client = require('../models/ClientModel')
const formatDate = require('../helpers/formatDate')
module.exports = async (req,res,next)=>{
    const client = await Client.findById(req.body._id).exec();
    const {_id,number,city,members,dateNow,dateFrom,dateTo,aviaTicket,transfer,hotel,foodType,medical,visas,cost,val,payed,passport,phoneNumber,firstName,lastName,fatherName} = client;
    generateCard({_id, number, city, members, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName,dateNow: formatDate(dateNow), dateTo: formatDate(dateTo), dateFrom: formatDate(dateFrom)}).then(file =>{
        res.sendFile(path.resolve( process.cwd(),'output',`${_id}.pdf`),function (err){
            if (err) {
                next(err);
              } else{
                try {
                    fs.unlink(path.resolve( process.cwd(),'output',`${_id}.pdf`)); 
                  } catch(e) {
                    console.log("error removing ", path.resolve( process.cwd(),'output',`${_id}.pdf`)); 
                  }
              }
        });
    }).catch(err=> res.json({error: err}));
    
}