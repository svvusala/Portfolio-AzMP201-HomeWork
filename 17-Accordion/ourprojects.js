const accordionItemsHeader = document.querySelectorAll(".accordionitemsheader")

accordionItemsHeader.forEach(elem => {
    elem.addEventListener("click", change => {
        elem.classList.toggle("active")
      
    })
})