let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1; 
    }
    
)}

let productToFav = document.querySelectorAll(".to-favorite");
let count = new Array(productToFav.length).fill(0);

for (let i = 0; i < productToFav.length; i++) {
    productToFav[i].addEventListener("click", function() {
        count[i] += 1;
        if (count[i] % 2 == 1 ) {
            changeColorAndImageForFav(productToFav[i], "#2c71b8", "url(images/icon7.png)");
        } else {
            changeColorAndImageForFav(productToFav[i], "rgba(255, 255, 255, 0.5)", "url(images/icon5.png)");
        } 
    }   
)}

function changeColorAndImageForFav(button, color, imageUrl) {
    button.style.backgroundColor = color;
    button.style.backgroundImage = imageUrl;
}