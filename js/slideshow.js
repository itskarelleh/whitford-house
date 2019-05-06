function createSlideShow(imgSrc, img1){
    //Section Div
    var sectionDiv = document.getElementById("tour");
    // The .slideshow class
    var slideShowClass = document.createAttribute("class");
    //the .slideshow div
    var slideShowDiv = document.createElement("div");
    //Adds "slideshow" value to class
    slideShowClass.value = "slideshow"
    //Assigns the class to the div
    slideShowDiv.setAttributeNode(slideShowClass);
    //Adds the slideshow div to the section div
    sectionDiv.appendChild(slideShowDiv);

    //Slideshow Image Div
    var imgDiv = document.createElement("img");
    var imgClass = document.createAttribute("class", "src");
    imgClass.value = "gallery-img";

    imgDiv.setAttributeNode(imgClass);
    //Insert Image Div into slideshow     
    slideShowDiv.appendChild(imgDiv);

    imgDiv.src = "img/libary-with-fireplace.jpg";

    //SLideshow button
    var btnDiv = document.createElement("button");
    var btnClass = document.createAttribute("class");
    var btns = document.createElement("div");

    btnClass.value("img-btn");
    btns.insertAdjacentHTML(imgDiv);

    
}

createSlideShow();

