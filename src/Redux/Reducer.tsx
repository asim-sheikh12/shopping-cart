
interface CounterState {
  productList: [];
}
const initialState: CounterState = {
  productList: [],
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productData : {} = action.payload;
      {
        return {
          ...state,
          productList: [
            ...state.productList,
            {...productData},
          ],
        };
      }
    case "DELETE_ITEM":
      const id = action.payload
      console.log("Delete ID",id)
      console.log("Total List >>>>>>",state.productList);
      const newList = state.productList.filter(
        (elem:any) => 
        elem.data.id !== id 
      );
      console.log("New List >>>>>>",newList)  
      return {
        productList: newList,
      };
      break;
    default:
      return state;
  }
};
export default Reducer;
