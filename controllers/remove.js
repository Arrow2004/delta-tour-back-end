const fs = require('fs')
const Client = require('../models/ClientModel')
module.exports = (req,res)=>{
    Client.findByIdAndRemove(req.body._id).then(removed=>{
        res.json({message: "Deleted!!!"});
    }).catch(err=>{
        res.json(err)
    })
}