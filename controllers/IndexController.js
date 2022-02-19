const fs = require('fs');
const { exec } = require("child_process");

class IndexController {
    static async exeCode( code, cb) {
        console.log(code);
  const filePath = __dirname + '/../public/javascripts/index.js';
  fs.unlink(filePath, function (err) {
    //if (err) throw err;
    fs.readFile(__dirname + '/../public/javascripts/tests/index.js', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
      fs.appendFile(filePath, code + data.toString(), err => {
        if (err) throw err; 
        console.log(err);
        exec(`node ${filePath}`, (error, stdout, stderr) => {
          if (error) {
              console.log(error?.message);
              cb.json({ 
                output: error?.message,
                error: true 
              });
              // console.log(`error: ${error?.message}`);
              return;
          }
          if (stderr) {
              // console.log(`stderr: ${stderr}`);
              cb.json({ 
                output: stderr,
                error: true 
              });
              return;
          }
          // console.log(`stdout: ${stdout}`);
          cb.json({ 
            output: error?.message,
            error: false 
          });
        });
      })
    })
    // if no error, file has been deleted successfully
    console.log('File deleted!');

  });

    }
}

module.exports = IndexController  