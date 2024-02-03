// import child_process module
const cp = require('child_process')

// create execute command function 

function executeCommand(command){

    // execute the 'command'  and display it in console
    console.log('Output : \n' + cp.execSync(command))

}

// test cases for testing 'executeCommand' function

//test case 1 : - shell_command = 'ls -la'

executeCommand('ls -la');

//test case 2 : - shell command = echo

executeCommand('echo "Hello, Node.js!"')