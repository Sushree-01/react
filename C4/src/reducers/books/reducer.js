export const initState = {
    loading: false,
    data: [],
    error: false

};

export const reducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_DATA_LOADING':
          return { ...state, loading: true,data:[],error:false };
        case 'FETCH_DATA_SUCCESS':
          return { ...state, loading: false, data: action.payload, error: false };
        case 'FETCH_DATA_FAILURE':
          return { ...state, loading: false,data:[], error: true };
        default:
          throw new Error('invalid action type');
      }

};
