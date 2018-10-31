import axios from 'axios';
export default async function fetchNewsAPI(params){
  return await axios.get(`https://gapi.xyz/api/V1/?q=${params}&max=6`, null )
    .then((response) => {
      console.log("response call", response.data)
      return response.data
    })
    .catch(err => {
      throw err;
    });
} 

// export default async function fetchNewsAPI() {
//   try {
//     const response = await fetch('https://gapi.xyz/api/V1/?q=indonesia&max=6');
//     console.log(JSON.stringify(response.json()))
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// } 