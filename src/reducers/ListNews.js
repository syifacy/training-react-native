const initialState = {
  news: [],
  loading: false,
  message:{}
};
const dataReducer = (currentState = initialState, action) => {
  console.log("FETCH NEWS REDUCER", action)

  switch (action.type) {
    case 'FETCH_NEWS_REQUESTED':
    console.log("request FETCH NEWS REDUCER", action)
     return {
       ...currentState,
       loading: true,
     };
    case 'FETCH_NEWS_SUCCESS':
    console.log("SUKSES FETCH NEWS REDUCER", action)
    return {
      ...currentState,
      loading: false,
      news: action.payload.content,
    };
    case 'FETCH_NEWS_FAILURE':
    return{
      loading: false,
      message:{
        title: 'Oops.. terjadi kesalahan'
      }
      
    }
    default:
      return currentState;
  }
};

export default dataReducer;
