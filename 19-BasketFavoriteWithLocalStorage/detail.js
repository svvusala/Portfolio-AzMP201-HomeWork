fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {

const URL = new URLSearchParams(location.search);
const id = URL.get("id");

const detailPage = document.querySelector(".detailPage")

    elem = data.find((elem) => elem.id == id)

    const prodCard = document.createElement("div");
    const prodImage = document.createElement("img");
    const prodTitle = document.createElement("p");
    const prodPrice = document.createElement("p")
    const prodRating = document.createElement("p")

    prodImage.src = elem.image;
    prodTitle.innerText = elem.title;
    prodPrice.innerText = elem.price;
    prodRating.innerText = elem.rating.rate

    prodCard.className = "prodCard";
    prodImage.className = "prodImage";
    prodTitle.className = "prodTitle";
    prodPrice.className = "prodPrice";
    prodRating.className = "prodRating";

    prodCard.append(prodImage,prodTitle,prodPrice,prodRating);
    detailPage.append(prodCard);
})