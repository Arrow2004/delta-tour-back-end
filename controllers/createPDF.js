const generateCard = require('../pdfCreator/index')
const path = require('path')
const Client = require('../models/ClientModel')
const fs = require('fs')
const formatDate = require('../helpers/formatDate')
module.exports = async (req,res,next)=>{
    const newClient = new Client({...req.body});
    newClient.save().then(client=>{
        const { _id, number, city, members, dateNow, dateFrom, dateTo, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName} = client;
        generateCard({_id, number, city, members, aviaTicket, transfer, hotel, foodType, medical, visas, cost, val, payed, passport, phoneNumber, firstName, lastName, fatherName,dateNow: formatDate(dateNow), dateTo: formatDate(dateTo), dateFrom: formatDate(dateFrom)}).then(file =>{
                res.sendFile(path.resolve( process.cwd(),'output',`${_id}.pdf`),{headers: {
                    '_id': _id
                }},function (err){
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
        }).catch(err=>{
            return res.json(err)
        })
}