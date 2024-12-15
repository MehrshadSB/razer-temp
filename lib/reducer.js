const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  INCREASE_QTY: "INCREASE_QTY",
  DELETE_FROM_CART: "DELETE_FROM_CART",
};

const initalState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return { ...state, id: action.payload.id };
  }
};
