const generateCard = require('../pdfCreator/index')
const path = require('path')
const Client = require('../models/ClientModel')
const fs = require('fs')
const formatDate = require('../helpers/formatDate')
module.exports = async (req,res,next)=>{
    const newClient = new Client({...req.body});
    const client  = await  newClient.save();
    const { _id, number, city, members, dateNow, dateFrom, dateTo, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName} = client;
    generateCard({_id, number, city, members, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName,dateNow: formatDate(dateNow), dateTo: formatDate(dateTo), dateFrom: formatDate(dateFrom)}).then(file =>{
            res.sendFile(path.resolve( process.cwd(),'output',`${_id}.pdf`),{headers: {
                '_id': _id
            }});
        }).catch(err=> res.json({error: err}));
}