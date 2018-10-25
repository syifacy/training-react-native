const initialState ={
  isLoading: false,
  loadSuccess: false
}

const dataReducer = (currentState = initialState, action)=>{
  switch(action.type){
    case 'LOAD_LIST_REQUEST':
    return{
      ...currentState,
      isLoading: true
    }
    case 'LOAD_LIST_SUCCESS':
    console.log("LOAD LIST REDUCER")
      return{
        ...currentState,
        isLoading: false,
        loadSuccess: true
      }
    case 'RESET':
      return{
        loadSuccess: false,
      }
      default:
      return currentState;
  }
}

export default dataReducer;