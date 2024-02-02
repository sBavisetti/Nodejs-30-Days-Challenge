// import the fs module
const fs = require('node:fs');

// function to readfiles
function readFileContent(filePath){

    fs.readFile(filePath, 'utf8', (err, data) =>
    {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    }
    );

}

// testing function
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');

