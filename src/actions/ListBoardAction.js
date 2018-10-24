
export const loadList = () =>{
  console.log("loadList")
  return {
    type:'LOAD_LIST',
  }
}

export const loadingNow = () =>{
  return{
        type:'LOAD_NOW',
  }
}
