const mongoose = require('mongoose')

const cLientScheme = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fatherName:{
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    dateNow: {
        type: Date,
        required: true
    },
    dateFrom: {
        type: Date,
        required: true
    },
    dateTo: {
        type: Date,
        required: true
    },
    aviaTicket: {
        type: String,
        required: true
    },
    transfer:{
        type: String,
        required: true
    },
    hotel:{
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    medical: {
        type: String,
        required: true
    },
    foodType:{
        type: String,
        required: true
    },
    visas: {
        type: Number,
        required: true,
    },
    members: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    val: {
        type: Number,
        required: true,
    },
    payed: {
        type: Number,
        required: true,
    },
    passport: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Client",cLientScheme);