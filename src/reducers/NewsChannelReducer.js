const initialState = {
  isLoading: false,
  listChannelNews:[],
  message:{}
}

const dataReducer = (currentState = initialState, action) =>{
  switch (action.type){
    case 'FETCH_NEWS_CHANNEL_REQUESTED':
      return{
        isLoading: true,

      }
    case 'FETCH_NEWS_CHANNEL_SUCCESS':
      console.log("REDUCER NEWS CHANNEL # ", action.payload)
      return{
        isLoading: false,
        listChannelNews: action.payload,
      }
    case 'FETCH_NEWS_CHANNEL_FAILURE':
      return{
        isLoading: false,
        message:{
          title: 'Error occured news channel',
          msg: action.error,
        }
      }
    case 'RESET':
      return{
        ...initialState,
        listChannelNews:[]
      }
    case 'RESET_MESSAGE':
      return{
        ...currentState,
        message:{}
      }
    default:
    return currentState;
  }
}

export default dataReducer;