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
            productToFav[i].style.backgroundColor = '#2c71b8';
            productToFav[i].style.backgroundImage = "url(images/icon7.png)";
        } else {
            productToFav[i].style.backgroundImage = "url(images/icon5.png)";
            productToFav[i].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        }
    }    
)}
