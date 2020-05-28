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
    imgDiv.src = SpaceCategories.IMG;
    linkDiv.href = SpaceCategories.LINK;

    mainContainer.appendChild(linkDiv);
    // linkDiv.appendChild(MainDiv);
    linkDiv.appendChild(imgDiv);

    MainDiv.className = "MainDiv";
    imgDiv.className = "imgDiv";
    linkDiv.className = "linkDiv";

    
});

document.body.appendChild(mainContainer);