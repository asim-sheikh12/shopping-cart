
export const AddToCart = (data : any) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      productData  : data,
    },
  };

};
  export const DeleteItem = (id : number) => {
  return {
    type: "DELETE_ITEM",
    payload: {
      id,
    },
  };
};