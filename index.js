// Import packages 

// Require inquirer to generate prompt questions
const inquirer = require('inquirer');
// Require logoGenerator 
const logoGenerator = require('./lib/logoGenerator');
// Require Shapes Classes
const {Shape, Circle, Triangle, Square} = require('./lib/shapes');
const writeFile = require('./lib/writeFile');



// Prompt Questions to User
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Designate a shape for your logo:',
        choices: ['Triangle', 'Circle', 'Square'],
    },

    {
        type:'input',
        name:'text',
        message: 'Write up to 3 characters:',
        validate: function (text){
            if(text.length>3){
                console.log('Input lenght is incorrect');
                return false
            }else {
                return true
            }
        }
    },

    {
        type: 'input',
        name:'textColor',
        message: 'What colour would you like the text of your logo to have?:'
    },

    {
        type: 'input',
        name: 'bgColor',
        message:'What background color would you like your logo to have?:'
    }

];

// Function to initialize Command Line Interface app
function init(){
    inquirer
    .prompt (questions)
    .then ((answers) => {
        // Create "svg" new instance of a class passing the parameters deducted from the answers
        eval("svg = new " + answers.shape + "(answers.shape, answers.text, answers.textColor, answers.bgColor)");
        writeFile(logoGenerator(svg.logoShape(), svg.logoText()));
    })
    .catch((err)=> console.log(err));
}

init();