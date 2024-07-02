let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let {id,title,price,description,category,image,rating} = x
        let search = basket.find((x) => x.id == id) || []
        return `<div id=product-id-${id} class="items">
        <img src=${image}>
        <div class="details">
            <h5>${category}<h5>
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="price-quantity">
                <h3>${price}</h3>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg minus"></i>
                    <div id=${id} class="quantity">${search.item == undefined ? 0 : search.item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg plus"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join(""));
};

generateShop()

let increment = (id) => {


let search = basket.find((x) => x.id == id)

if (search == undefined) {
    basket.push({
        id:id,
        item:1,
    })
}else{
    search.item +=1
}


    console.log(basket);
    update(id)
  localStorage.setItem("data",JSON.stringify(basket))


}
let decrement = (id) => {

  localStorage.setItem("data",JSON.stringify(basket))

    let search = basket.find((x) => x.id == id)

    if (search.item == 0) return;

    else{
        search.item -=1
    }

    basket = basket.filter((x) => x.item !== 0);

    console.log(basket);
    update(id)
}
let update = (id) => {
    let search = basket.find((x) => x.id == id)
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item
    calculate()
}

let calculate = () => {
    let cartIcon = document.getElementById("cartamount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)
    
}

calculate();