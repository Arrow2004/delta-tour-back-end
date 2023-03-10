const generateCard = require('./index')
const path = require('path')

generateCard({number: "DEL-20825", city: "Dubay", members: 2, dateNow: "03.03.2023", dateFrom: "08.03.2023", dateTo: "31.03.2023", aviaTicket: "UZbekistan airways", transfer: "TBC bank", hotel: "Burj Halifa hotel", foodType: "BB", medical: "Yo'q", visas: 2, cost: 12000000, val: 11200, payed: 9000000, passport: "AC3023762", pNumber: "+998974368682", fName: "Akbar", lName:  "Abdusattorov", fatherName: "Sahvkat o'g'li"}).then((res)=>{
    console.log(res);
});