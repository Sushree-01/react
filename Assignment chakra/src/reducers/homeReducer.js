const initState = {
  loading: false,
  data: [],
  err: false,
  totalPages: 1,
};
//don't manipulate the above object data

const homeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { ...state, loading: true,data:[],err: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        err: false,
        data: action.payload,
        totalPages: action.payload.totalPages,
      };
    case "FETCH_FAILURE":
      return { ...state, loading: false, err: true, data: [], totalPages: 1 };
    default:
      throw new Error(`invalid action type, ${action.type}`);
  }
};

export { homeReducer, initState };
