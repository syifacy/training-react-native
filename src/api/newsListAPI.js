import axios from 'axios';

export default async function fetchNewsListAPI(params){
  return await axios.get(`https://newsapi.org/v2/everything?apiKey=d31a85f5dffc42c38e3823ed8854aab9&language=en&sources=${params}`, null)
  .then((response)=>{
    console.log("response call list news", response);
    return response.data
  })
  .catch(error =>{
    throw error;
  })
}