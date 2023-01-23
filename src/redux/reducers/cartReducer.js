let defaultState = {
  selectedItems: {items: []},
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        {
        let newState = {...state};
        if (action.payload.checkboxValue) {
          console.log('ADD TO CART');
          newState.selectedItems = {
            items: [...newState.selectedItems.items, action.payload],
          };
        } else {
          console.log('REMOVE FROM CART');
          newState.selectedItems = {
            items: [
                ...newState.selectedItems.items.filter((item)=> item.text !== action.payload.text),
            ],
          };
        }
        console.log(newState.selectedItems);
        return newState;
      }
    default:
      return state;
  }
};

export default cartReducer;
