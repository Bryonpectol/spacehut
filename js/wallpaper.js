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
        LINK: CatBox.link,
        PhoneIMG: CatBox.phoneimg,
        PhoneLINK: CatBox.phonelink
    };

});

PhotoBoxes.forEach(SpacePhotos => {
    let MainDiv = document.createElement("div");
    let imgDiv = document.createElement("img");
    let phoneImgDiv = document.createElement("img");
    let linkDiv = document.createElement("a");
    let phoneLinkDiv = document.createElement("a");

    // MainDiv.textContent = SpacePhotos.Name;
    imgDiv.src = SpacePhotos.IMG;
    phoneImgDiv.src = SpacePhotos.PhoneIMG;
    linkDiv.href = SpacePhotos.LINK;
    phoneLinkDiv.href = SpacePhotos.PhoneLINK;

    // MainContainer.appendChild(linkDiv);
    // linkDiv.appendChild(MainDiv);
    // linkDiv.appendChild(imgDiv);

    // MainDiv.className = "MainDiv";
    imgDiv.className = "imgDiv";
    linkDiv.className = "linkDiv";
    phoneLinkDiv.className = "phonelinkDiv";
    phoneImgDiv.className = "phoneDiv";

    

    // document.body.appendChild(MainContainer);
    MainContainer.appendChild(linkDiv);
    MainContainer.appendChild(phoneLinkDiv);
    linkDiv.setAttribute('download', imgDiv);
    linkDiv.setAttribute('download', phoneImgDiv);
    linkDiv.appendChild(phoneImgDiv);
    linkDiv.appendChild(imgDiv);
   
});

