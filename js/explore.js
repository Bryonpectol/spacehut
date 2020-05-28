import { categories } from "../js/exploredata.js";

const mainContainer = document.createElement("div");
mainContainer.className = "container";

const CategoriesBoxes = categories.map(SpaceCategories => {
    let CatBox = categories.find(Cat => {
        return Cat.name === SpaceCategories.name;
    });

    return {
        Name: CatBox.name,
        ID: CatBox.id,
        IMG: CatBox.img,
        LINK: CatBox.link
    };

});

CategoriesBoxes.forEach(SpaceCategories => {
    let MainDiv = document.createElement("div");
    let imgDiv = document.createElement("img");
    let linkDiv = document.createElement("a");

    MainDiv.textContent = SpaceCategories.Name;
    imgDiv.textContent = SpaceCategories.IMG;
    linkDiv.textContent = SpaceCategories.LINK;

    mainContainer.appendChild(MainDiv);
    MainDiv.appendChild(imgDiv);
    MainDiv.appendChild(linkDiv);

    MainDiv.className = "MainDiv";

    
});

document.body.appendChild(mainContainer);