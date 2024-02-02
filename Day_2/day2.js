// import fs module
const fs = require('fs')

// function to write data to file.
function writeToFile(filePath, content){
    fs.writeFileSync(filePath, content)
};

//writing content to output1.txt
writeToFile('test-files/output1.txt', 'Sample content.');

console.log('Data has been successfully written in output1.txt\n')

// writing content to non exisiting directory
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');

console.log("data has been written to nonexistent-folder/outptu.txt")
