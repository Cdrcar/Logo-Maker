//Exports `Triangle`, `Circle`, and `Square` classes

//Define base Class Shape 

class Shape {
    constructor (shape, text, textColor, bgColor){
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
        this.bgColor = bgColor;
    }
    logoText () {
        return `
        <text x="150" y="120" font-family="Serif" font-size="50" text-anchor="middle" fil="${this.textColor}">
        ${this.text}
        </text>
        `
    }
};
