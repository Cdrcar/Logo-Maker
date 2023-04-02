// Jest tests for shapes

const {Shape, Circle, Triangle, Square} = require('./shapes');

describe ('Shape', () => {

    //Test Text and Text Color
    describe('Text & Text Color', () => {
        it('should return the text CDR in black color', () =>{
            const shape = new Shape ('', 'CDR', 'black', '');
            expect (shape.logoText()).toEqual('<text x="150" y="120" font-family="Serif" font-size="50" text-anchor="middle" fill="black">CDR</text>')
        })
    });

    //Test Bg Color for a circle
    describe ('Bg Color for a circle', () => {
        it('should return a Circle with a white background color', () => {
            const shape = new Circle ('','','','white');
            expect (shape.logoShape()).toEqual('<circle cx = "150" y = "100" r = "80" fill="white"/>')
        })
    });

    //Test Text Color for a triangle
    describe ('Text Color for a circle', () => {
        const shape = new Triangle('', 'ABC', 'pink','');
        expect (shape.logoText()).toEqual('<text x="150" y="120" font-family="Serif" font-size="50" text-anchor="middle" fill="pink">ABC</text>')
    })

    });