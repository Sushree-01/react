const initState = {
  name: "", //string
  type: "", // one of -->  ethnic, cafe, casual_dining, fine_dining, fast_food
  rating: "", // number --> 1-5
  number_of_votes: "", // number
  price_starts_from: "", // number
  image: "", // string imageUrl
};
//don't manipulate the above object data

const addRestaurantReducer = (state,action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.payload.name]: action.payload.value };
    case "RESET_VALUES":
      return { ...initState };
    default:
      throw new Error(`invalid action type, ${action.type}`);
  }
};



//don't manipulate the below one
export { initState, addRestaurantReducer };
