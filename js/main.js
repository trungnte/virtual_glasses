import Glasses from "./Glasses.js";

let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

// console.log("Type of dataGlasses[0]: ", typeof(dataGlasses[0]));

let activeGlasses = null;

let findObjById = (id) => {
    let glasses = null;
    dataGlasses.map(obj => {
        if( obj.id === id ) {
            let {id,src,virtualImg,brand,name,color,price,description} = obj;
            glasses = new Glasses(id,src,virtualImg,brand,name,color,price,description);
        }
    });
    return glasses;
}

let wearGlasses = (virtualImg, isShow) => {
    // console.log("virtualImg: ", virtualImg);
    let content = `
        <div>
            <img src="${virtualImg}">
        </div>`;
    
    document.querySelector("#avatar").innerHTML = isShow?content:"";
}

let showGlassesInfo = (glasses) => {
    let divInfo = document.querySelector("#glassesInfo");
    divInfo.innerHTML = glasses.showInfo();
    divInfo.setAttribute("style", "display:block;");
}

window.userChooseGlasses = (id) => {
    // console.log(id);
    // let glasses = findObjById(id);
    activeGlasses = findObjById(id);
    // console.log(activeGlasses);

    if(activeGlasses != null){
        // check flag and show wear glasses
        wearGlasses(activeGlasses.virtualImg, true);
        // show info glasses
        showGlassesInfo(activeGlasses);
    }
    
}

let loadGlasses = () => {
    let contentBody = "";
    dataGlasses.map(obj => {
        // console.log(obj);
        contentBody += `
            <div class="col-4" id="div${obj.id}" onclick="userChooseGlasses('${obj.id}')" >
                <img src="${obj.src}" class="img-fluid" >
            </div>
            `;
    });
    document.querySelector("#vglassesList").innerHTML = contentBody;
}

loadGlasses();


window.removeGlasses = (bRemoveGlasses) => {
    // remove glasses out of avatar
    if(!bRemoveGlasses) {
        // console.log("Disable glassess!");
        wearGlasses(activeGlasses.virtualImg, bRemoveGlasses);
    }
    else {
        // console.log("Enable glassess!");
        wearGlasses(activeGlasses.virtualImg, bRemoveGlasses);
    }
}