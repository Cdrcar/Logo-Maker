// Import packages 

// Require inquirer to generate prompt questions
const inquirer = require('inquirer');
// Require logoGenerator 
const logoGenerator = require ('./lib/logoGenerator');
// Require Shapes Classes
const {Shape, Circle, Triangle, Square} = require('./lib/shapes');



// Prompt Questions to User
const questions = [
    {
        type: 'input',
        name: 'shape',
        message: 'Designate a shape for your logo:',
        choices: ['Triangle', 'Circle', 'Square']
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