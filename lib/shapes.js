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
        return `
        <text x="150" y="120" font-family="Serif" font-size="50" text-anchor="middle" fil="${this.textColor}">
        ${this.text}
        </text>
        `
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
        return `
        <circle cx = "150" y = "100" r = "80" fill="${this.bgColor}"/>
        `
    }
};
