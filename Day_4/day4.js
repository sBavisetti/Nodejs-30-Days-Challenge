// import path module
const path = require('path')

//function to resolve relative path
function resolvePath(relativePath){

    console.log("Resolved Path : " + path.resolve(relativePath));
}

// testing the function

//test 1
resolvePath('../project/folder/file.txt')
//test 2
resolvePath('nonexistent-folder/file.txt')
