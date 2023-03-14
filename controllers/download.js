const path = require('path');
const generateCard = require('../pdfCreator/index');
const fs = require('fs')
const Client = require('../models/ClientModel')
const formatDate = require('../helpers/formatDate')
module.exports = async (req,res,next)=>{
    let filelist = []
    const client = await Client.findById(req.body._id).exec();
    const {_id,number,city,members,dateNow,dateFrom,dateTo,aviaTicket,transfer,hotel,foodType,medical,visas,cost,val,payed,passport,phoneNumber,firstName,lastName,fatherName} = client;
    const fileName = await generateCard({_id, number, city, members, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName,dateNow: formatDate(dateNow), dateTo: formatDate(dateTo), dateFrom: formatDate(dateFrom)})
    fs.readdir(path.join(process.cwd(),'output'), (err, files) => {
        files.forEach(file => {
            filelist.push(file)
        });
      });
    //res.sendFile(path.join( process.cwd(),'output',`${_id}.pdf`));
    res.json({fileName, path: path.join( process.cwd(),'output',`${_id}.pdf`), filelist})
    
}