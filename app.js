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
        productToFav[i].style.backgroundColor = count[i] % 2 ? "#2c71b8" : "rgba(255, 255, 255, 0.5)";
        productToFav[i].style.backgroundImage = count[i] % 2 ? "url(images/icon7.png)" : "url(images/icon5.png)"
    })
}