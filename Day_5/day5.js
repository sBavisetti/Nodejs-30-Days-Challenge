// import path module
const path = require('path')

// function to check file extension
function checkFileExtension(filepath, expectedExtension){
    
    let actualExtension = path.extname(filepath);
    if (actualExtension == expectedExtension){
        console.log('File has expected extension : '+ actualExtension);
    }
    else{
        console.log('File does not have expected extension.\n Expected: ' + expectedExtension + ', Acutal: ' + actualExtension);
    }
}

// testing the function
//test 1
checkFileExtension('test-files/file1.txt', '.txt')

//test2
checkFileExtension('test-files/image.png', '.jpg')