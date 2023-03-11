const createPdf = require('pdf-creator-node')
const fs = require('fs')
const path = require('path')
const generateCard = async (data)=>{
    const html = fs.readFileSync(path.join(__dirname, '/template.html'), "utf8");
    const options = {
        format: "A4",
        orientation: "portrait",
        border: "5mm",
          phantomPath: path.resolve(
            process.cwd(),
            "node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs"
          ),
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
       phantomPath: path.resolve(
        process.cwd(),
        "node_modules/phantomjs-prebuilt/bin/phantomjs"
        ),
       //path: `./output/1677488876677_john_doe_12345678.pdf`,
        type: "",
      };
    return createPdf
      .create(document, options,{
        phantomPath: path.resolve(
          process.cwd(),
          "node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs"
        ),
      })
      .then((res) => {
        return res.filename;
      })
      .catch((error) => {
        return {error,type: 'creating function'};
      });
}
module.exports = generateCard;