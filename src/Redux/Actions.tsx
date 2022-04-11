
export const AddToCart = (data : {}) => {
  return {
    type: "ADD_TO_CART",
    payload: {
    data,
    },
  };

};
  export const DeleteItem = (id : number) => {
    
  return {

    type: "DELETE_ITEM",
    payload: id
  };
};