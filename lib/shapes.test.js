// Jest tests for shapes

const {Shape, Circle, Triangle, Square} = require('./shapes');

describe ('Shape', () => {

    //Test Text and Text Color
    describe('Text & Text Color', () => {
        it('should return in black color the text CDR', () =>{
            const shape = new Shape ('black', 'CDR');
            expect (shape.logoText()).toEqual('<text x="150" y="120" font-family="Serif" font-size="50" text-anchor="middle" fill="black">CDR</text>')
        })
    })
});