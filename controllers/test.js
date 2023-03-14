const fs = require('fs')
const path = require('path')
let filelist = [];
fs.readdir(path.join(process.cwd(),'output'), (err, files) => {
    files.forEach(file => {
        filelist.push(file)
    });
    console.log({ path: path.join( process.cwd(),'output',`${25}.pdf`), filelist})
  });