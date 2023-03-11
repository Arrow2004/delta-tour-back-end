const createPdf = require('pdf-creator-node')
const fs = require('fs')
const path = require('path')
const generateCard = async (data)=>{
    const html = fs.readFileSync(path.join(__dirname, '/template.html'), "utf8");
    const options = {
        format: "A4",
        orientation: "portrait",
        border: "5mm",
        //base: "file:///"+path.join(__dirname+"../").replace(new RegExp(/\\/g),'/')
    };
    const document = {
        html: html,
        data: {
          data: {
            ...data,
          },
        },
       path: `./output/${data._id}.pdf`,
       //path: `./output/1677488876677_john_doe_12345678.pdf`,
        type: "",
      };
    return createPdf
      .create(document, options)
      .then((res) => {
        return res.filename;
      })
      .catch((error) => {
        return {error,type: 'creating function'};
      });
}
module.exports = generateCard;