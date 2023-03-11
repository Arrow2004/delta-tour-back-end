const generateCard = require('../pdfCreator/index')
const path = require('path')
const Client = require('../models/ClientModel')
const fs = require('fs')
const formatDate = require('../helpers/formatDate')
module.exports = async (req,res)=>{
    res.json(req.body)
    const newClient = new Client({...req.body});
    console.log(req.body)
    newClient.save().then(client=>{
        const { _id, number, city, members, dateNow, dateFrom, dateTo, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName} = client;
        generateCard({_id, number, city, members, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName,dateNow: formatDate(dateNow), dateTo: formatDate(dateTo), dateFrom: formatDate(dateFrom)}).then(file =>{
                res.sendFile(path.join(file),{headers: {
                    '_id': _id
                }},function (err){
                    fs.unlink(file, (err=>{
                        if(err) console.log(err);
                    }))
                    if(err) res.json({error: err, type: "sending"})
                });
            }).catch(err=> res.json({error: err, type: "creating"}));
        }).catch(err=>{
            return res.json({error: err,  type: "saving"})
        })
}