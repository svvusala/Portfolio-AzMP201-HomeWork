fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    let fav = JSON.parse(localStorage.getItem("fav")) || [];

    const mainHomePage = document.querySelector(".mainHomePage");
    // const basketPage = document.querySelector(".basketPage");
    // const favPage = document.querySelector(".favPage");

    data.forEach((element) => { 
      createCards(element, mainHomePage);

      function createCards(elem, page) {
        const prodCard = document.createElement("div");
        const prodTitle = document.createElement("p");
        const prodImage = document.createElement("img");
        const prodBasket = document.createElement("button");
        const prodFav = document.createElement("button");

        prodTitle.innerText = element.title;
        prodImage.src = element.image;
        prodBasket.innerText = "Add to basket";
        prodFav.innerHTML = `<i class="fa-regular fa-heart"></i>`;

        prodCard.className = "prodCard";
        prodTitle.className = "prodTitle";
        prodImage.className = "prodImage";
        prodBasket.className = "prodBasket";
        prodFav.className = "prodFav";

        prodBasket.setAttribute("data", element.id);
        prodFav.setAttribute("data", element.id);

        // detail page
        prodCard.addEventListener("click", (e) => {
          window.location.href = `detail.html?id=${element.id}`;
        });

        // baskete atmaq

        prodBasket.addEventListener("click", (e) => {
          e.stopPropagation();

          const checkItem = basket.find(
            (elem) => elem.id == e.target.getAttribute("data")
          );

          if (checkItem) {
            checkItem.count += 1;
            localStorage.setItem("basket", JSON.stringify(basket));
          } else {
            let elem = data.find(
              (elem) => elem.id == e.target.getAttribute("data")
            );
            elem.count = 1;
            basket.push(elem);
            localStorage.setItem("basket", JSON.stringify(basket));
          }
        });

        // favorilere atmaq
        prodFav.addEventListener("click", (e) => {
          e.stopPropagation();
          console.log(e.target);

          const checkItem = fav.find(
            (elem) => elem.id == e.target.getAttribute("data")
          );

          if (checkItem) {
            localStorage.setItem("fav", JSON.stringify(fav));
          } else {
            let elem = data.find(
              (elem) => elem.id == e.target.getAttribute("data")
            );
            fav.push(elem);
            localStorage.setItem("fav", JSON.stringify(fav));
          }

          // createCards(element, favPage);
        });

        prodCard.append(prodImage, prodTitle, prodBasket, prodFav);
        page.append(prodCard);
      }
    });


    const prodFav = document.createElement("button");

    prodFav.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log(e.target);

      const checkItem = fav.find(
        (elem) => elem.id == e.target.getAttribute("data")
      );

      if (checkItem) {
        localStorage.setItem("fav", JSON.stringify(fav));
      } else {
        let elem = data.find(
          (elem) => elem.id == e.target.getAttribute("data")
        );
        fav.push(elem);
        localStorage.setItem("fav", JSON.stringify(fav));
      }

      // createCards(element, favPage);
    });
  });
