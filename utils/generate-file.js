const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err =>{
            // if there's an error, reject Promise and send error to Promise .catch() method
            if (err) {
                reject(err);
                return;
            }

            // if everything goes well, resolve the Promise and send success message
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/style.css', fileContent, err =>{
            // if there's an error, reject Promise and send error to Promise .catch() method
            if (err) {
                reject(err);
                return;
            }

            // if everything goes well, resolve the Promise and send success message
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = {writeFile, copyFile};