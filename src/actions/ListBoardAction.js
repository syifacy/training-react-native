
  export const loadingNow = () =>{
    return{
          type:'LOAD_LIST_REQUEST',
    }
  }
  
export const loadList = () =>{
  console.log("loadList")
  return {
    type:'LOAD_LIST_SUCCESS',
  }
}


export const reset = () =>{
  return {
    type: 'RESET'
  }
}