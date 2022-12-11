export default class Glasses {
    constructor(id,src,virtualImg,brand,name,color,price,description) {
        this.id = id;
        this.src = src;
        this.virtualImg = virtualImg;
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.price = price;
        this.description = description;
    }

    showInfo = () => {
        let content = `
            <p style="font-weight:bold;" >${this.name} - ${this.brand} (${this.color}) </p>
            <p>
                <span style="background-color:red;" >$${this.price}</span>
                <span style="color: green;" > Stocking</span>
            </p>
            <p>${this.description}</p>
            `;
        return content;
    }
}