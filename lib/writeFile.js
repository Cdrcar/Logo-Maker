// Require fs to write to images.svg file
const fs = require('fs');

// Function to write the code from the logoGenerator to images.svg file
function writeFile(data) {
    fs.writeFile('./examples/logo.svg', data, (err) => err ? console.error(err) : console.log('Generated logo.svg!'));
};
module.exports=writeFile;