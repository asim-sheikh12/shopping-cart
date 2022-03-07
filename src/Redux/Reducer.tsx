
interface CounterState {
  productList: [],
}
const initialState : CounterState= {
  productList : [] ,
};

const Reducer = (state = initialState, action : any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const  productData = action.payload;
      const id = action.payload;
              {
        return {
          ...state,
          productList: [
            ...state.productList,
          {
            data : productData,
          }
          ]
        };
      }
       case "DELETE_ITEM":
      const newList = state.productList.filter((elem : any) => elem.id !== action.id);

      return {
        list: newList,
      };
      break;
    default:
      return state;
  }
};
export default Reducer;
