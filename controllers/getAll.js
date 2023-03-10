const fs = require('fs')
const path = require('path')
const Client = require('../models/ClientModel')
module.exports = async (req,res)=>{
    let files = []
    const cursor  = Client.find().cursor();
    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
        files.push(doc);
    }
    res.send(files)
}