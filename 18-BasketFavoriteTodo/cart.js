let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")

let basket = JSON.parse(localStorage.getItem("data")) || []

let calculate = () => {
    let cartIcon = document.getElementById("cartamount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)
    
}

calculate();

let generateItems = () => {
    if(basket.length !== 0){

    }else{
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href = "main.html">
        <button class = "homebtn">Back to Home</button>
        </a>`
    }
}

generateItems()