const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        return {
          ...state,
          data: action.payload,
        };
      case "SET_INPUT_VALUE":
        return {
          ...state,
          inputValue: action.payload,
        };
  
      case "ADD_TO_BASKET":
        const newBasket = [...state.basket, action.payload];
        localStorage.setItem("basket", JSON.stringify(newBasket));
        return {
          ...state,
          basket: newBasket,
        };
  
      case "REMOVE_FROM_BASKET":
        const updatedBasket = state.basket.filter(
          (item) => item.id != action.payload
        );
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
        return {
          ...state,
          basket: updatedBasket,
        };
  
      case "DELETE_BASKET":
        localStorage.removeItem("basket");
        return {
          ...state,
          basket: [],
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  