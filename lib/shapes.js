//Exports `Triangle`, `Circle`, and `Square` classes

//Define base Class Shape 

class Shape {
    constructor (shape, text, textColor, bgColor){
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
        this.bgColor = bgColor;
    }
    //Text inside the logo and Text Color
    logoText () {
        return `<text x="150" y="120" font-family="Serif" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
};


// Define Circle, Triangle and Square classes inheriting from Shape Class


// Define Class Circle
class Circle extends Shape {
    constructor (shape, text, textColor, bgColor){
        super(shape, text, textColor, bgColor)
    }
    // Shape and Bg Color of Logo
    logoShape (){
        return `<circle cx="150" cy="100" r = "80" fill="${this.bgColor}"/>`
    }
};

// Define Class Triangle 
class Triangle extends Shape {
    constructor (shape, text, textColor, bgColor){
        super(shape, text, textColor, bgColor)
    }
    // Shape and Bg Color of Logo
    logoShape () {
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${this.bgColor}"/>`
    }
};

//Define Class Square
class Square extends Shape{
    constructor(shape, text, textColor, bgColor){
        super(shape, text, textColor, bgColor)
    }
    // Shape and Bg Color of Logo
    logoShape() {
        return `
        <rect x="70" y="35" width="150" height="150" fill="${this.bgColor}" />
        `
    }
};
//Export Shape, Circle, Triangle and Square Objects
module.exports = { Shape, Circle, Triangle, Square};