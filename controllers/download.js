const path = require('path');
const generateCard = require('../pdfCreator/index');
const fs = require('fs')
const Client = require('../models/ClientModel')
const formatDate = require('../helpers/formatDate')
module.exports = (req,res)=>{
    const _id = req.body._id;
    res.json({_id})
    Client.findOne({_id}).then(client=>{     
        const {_id,number,city,members,dateNow,dateFrom,dateTo,aviaTicket,transfer,hotel,foodType,medical,visas,cost,val,payed,passport,phoneNumber,firstName,lastName,fatherName} = client;
            generateCard({_id, number, city, members, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName,dateNow: formatDate(dateNow), dateTo: formatDate(dateTo), dateFrom: formatDate(dateFrom)}).then(file =>{
                // res.sendFile(path.join(file),function (err){
                //     fs.unlink(file, (err=>{
                //         if(err) console.log(err);
                //     }))
                //     if(err) res.json({error: err})
                // });
                res.json({_id,file})
            }).catch(err=> res.json({error: err}));
        }).catch(err=>{
            res.json(err)
        })
    
    
}