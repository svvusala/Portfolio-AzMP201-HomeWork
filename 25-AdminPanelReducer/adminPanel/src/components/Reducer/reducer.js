function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
        filteredProd: action.products,
      };
    case "SEARCH_PRODUCTS": {
      let arr = state.products.filter((elem) =>
        elem.title.toUpperCase().includes(action.searchValue.toUpperCase())
      );

      return { ...state, filteredProd: arr };
    }

    case "AtoZ": {
      let arr = [...state.products].sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      return { ...state, filteredProd: arr };
    }

    case "ZtoA": {
      let arr = [...state.products].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      return { ...state, filteredProd: arr };
    }

    case "lowToHigh": {
      let arr = [...state.products].sort((a, b) => a.price - b.price);
      return { ...state, filteredProd: arr };
    }

    case "highToLow": {
      let arr = [...state.products].sort((a, b) => b.price - a.price);
      return { ...state, filteredProd: arr };
    }

    case "lowToHighRate": {
      let arr = [...state.products].sort(
        (a, b) => a.rating.rate - b.rating.rate
      );
      return { ...state, filteredProd: arr };
    }

    case "highToLowRate": {
      let arr = [...state.products].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      return { ...state, filteredProd: arr };
    }

    case "lowToHighCount": {
      let arr = [...state.products].sort(
        (a, b) => a.rating.count - b.rating.count
      );
      return { ...state, filteredProd: arr };
    }

    case "highToLowCount": {
      let arr = [...state.products].sort(
        (a, b) => b.rating.count - a.rating.count
      );
      return { ...state, filteredProd: arr };
    }

    default:
      state;
  }
}

export default reducer;
