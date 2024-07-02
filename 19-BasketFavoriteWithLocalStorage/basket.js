let basket = JSON.parse(localStorage.getItem("basket")) || [];
console.log(basket);
const basketPage = document.querySelector(".basketPage");

createCard()
function createCard(){
    // basketPage.innerHTML = ""

    basket.forEach(element => {

        // console.log(element);
    
        const prodCard = document.createElement("div");
        const prodImage = document.createElement("img");
        const prodCardTitle = document.createElement("div");
        const prodTitle = document.createElement("p");
        const prodPrice = document.createElement("p");
        const prodQuantity = document.createElement("p");
        const prodTotalPrice = document.createElement("p");
        const prodPlusandMinus = document.createElement("div");
        const prodMinus = document.createElement("button");
        const prodPlus = document.createElement("button");
        const prodRemove = document.createElement("button");
    
        prodImage.src = element.image;
        prodCardTitle.innerText = element.title;
        prodPrice.innerText = element.price;
        prodQuantity.innerText = element.count;
        prodTotalPrice.innerText = element.price * element.count
        prodMinus.innerText = "-";
        prodPlus.innerText = "+";

        prodImage.className = "prodImage"
    
        prodCard.append(prodImage,prodCardTitle,prodTitle,prodPrice,prodQuantity,prodTotalPrice,prodMinus,prodPlus);
        basketPage.append(prodCard)
    
    
        prodPlus.addEventListener("click", (e) => {
            // console.log(e.target);
    
           basket.find((elem) => elem.id == e.target.getAttribute("data")).count += 1;
           localStorage.setItem("basket",JSON.stringify(basket));
           basketPage.innerHTML = "";
           createCard()
        })

        prodMinus.addEventListener("click", (e) => {
            // console.log(e.target);

            if(basket.find((elem) => elem.id == e.target.getAttribute("data")).count <= 1){
                basket = basket.filter(elem => elem.id != e.target.getAttribute("data"))
                basketPage.innerHTML=""
                createCard()
            }else{
                basket.find((elem) => elem.id == e.target.getAttribute("data")).count -= 1;
                localStorage.setItem("basket",JSON.stringify(basket));
                basketPage.innerHTML=""
                createCard()
            }          
        })

    
        // prodBasket.setAttribute("data", element.id);
        prodMinus.setAttribute("data", element.id);
        prodPlus.setAttribute("data", element.id);
    });
}