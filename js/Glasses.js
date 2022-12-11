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
            <p>${this.name} - ${this.brand} (${this.color}) </p>
            <p>$${this.price}
                <span>Stoking</span>
            </p>
            <p>${this.description}</p>
            `;
        return content;
    }
}