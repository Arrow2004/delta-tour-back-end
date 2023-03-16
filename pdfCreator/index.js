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
       path: path.join(process.cwd(),'output',`${data._id}.pdf`),
       //path: `./output/1677488876677_john_doe_12345678.pdf`,
        type: "stream",
      };
    return createPdf
      .create(document, options,{ phantomPath: path.resolve(
        process.cwd(),
        "node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs"
      )})
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
}
module.exports = generateCard;