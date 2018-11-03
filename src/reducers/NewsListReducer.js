const initialState ={
  isLoading: false,
  listNews: [],
  message:{}
}

const dataReducer = (currentState = initialState, action) =>{
  switch(action.type){
    case 'FETCH_NEWS_LIST_REQUESTED':
      return{
        isLoading: true,
      }
    case 'FETCH_NEWS_LIST_SUCCESS':
    return{
      isLoading: false,
      listNews: action.payload
    }
    case 'FETCH_NEWS_LIST_FAILURE':
    return{
      isLoading: false,
      message:{
        title: 'ERROR OCCURED NEWS LIST',
        msg: action.error
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
