const initialState ={
  isLoading: false,
  loadSuccess: false
}

const dataReducer = (currentState = initialState, action)=>{
  switch(action.type){
    case 'LOAD_NOW':
    return{
      ...currentState,
      isLoading: true
    }
    case 'LOAD_LIST':
    console.log("LOAD LIST REDUCER")
      return{
        ...currentState,
        isLoading: false,
        loadSuccess: true
      }
      default:
      return currentState;
  }
}

export default dataReducer;