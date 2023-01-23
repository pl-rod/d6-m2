const cTitle = function () {
    document.querySelector("h1").innerText = "Pedro´s bookShop";
};

const cBackground = function () {
    document.querySelector("body").style.backgroundColor = "azure";
};


const cLinkAddress = function () {
    document.querySelector("#address").innerText = "Ruananpur street"
};

const addClassToLinks = function () {
    let linkTags = document.querySelectorAll("a") 
    for (let i = 0; i < linkTags.length; i++) {
    linkTags[i].classList.add("#")
    }
};

const RandomColor = function () {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
};

const setRandomColor = function () {
    const randomColor = getRandomColor();
    let prices = document.querySelectorAll(".price")
    for (let i = 0; i < prices.length; i++) {
    let singlePrince = prices[i]
    singlePrince.style.color = randomColor
    }
};

const toggleImagesClass = function () {
    let images = document.querySelectorAll("img")
    for (let i = 0; i < images.length; i++) {
    const singleImg = images[i];
    singleImg.classList.toggle("hidden") 
    }
}