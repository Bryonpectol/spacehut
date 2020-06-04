import { photos } from "../js/wallpaperdata.js";

const MainContainer = document.getElementById("container");
MainContainer.className = "container";

const PhotoBoxes = photos.map(SpacePhotos => {
    let CatBox = photos.find(Cat => {
        return Cat.name === SpacePhotos.name;
    });

    return {
        Name: CatBox.name,
        ID: CatBox.id,
        IMG: CatBox.img,
        LINK: CatBox.link
    };

});

PhotoBoxes.forEach(SpacePhotos => {
    let MainDiv = document.createElement("div");
    let imgDiv = document.createElement("img");
    let linkDiv = document.createElement("a");

    // MainDiv.textContent = SpacePhotos.Name;
    imgDiv.src = SpacePhotos.IMG;
    linkDiv.href = SpacePhotos.LINK;

    // MainContainer.appendChild(linkDiv);
    // linkDiv.appendChild(MainDiv);
    // linkDiv.appendChild(imgDiv);

    MainDiv.className = "MainDiv";
    imgDiv.className = "imgDiv";
    linkDiv.className = "linkDiv";

    // document.body.appendChild(MainContainer);
    MainContainer.appendChild(imgDiv);
    
});

