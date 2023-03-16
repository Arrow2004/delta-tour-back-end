const path = require('path');
const generateCard = require('../pdfCreator/index');
const fs = require('fs')
const Client = require('../models/ClientModel')
const formatDate = require('../helpers/formatDate')
module.exports = async (req,res,next)=>{
    let filelist = []
    const client = await Client.findById(req.body._id).exec();
    const {_id,number,city,members,dateNow,dateFrom,dateTo,aviaTicket,transfer,hotel,foodType,medical,visas,cost,val,payed,passport,phoneNumber,firstName,lastName,fatherName} = client;
    const fileName = await generateCard({_id, number, city, members, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName,dateNow: formatDate(dateNow), dateTo: formatDate(dateTo), dateFrom: formatDate(dateFrom)}).then((file)=>{
        res.setHeader('Content-type', 'application/pdf');
        file.pipe(res)
    })   
}