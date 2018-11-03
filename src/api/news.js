import axios from 'axios';
export default async function fetchNewsChannelAPI(){
  return await axios.get(`https://newsapi.org/v2/sources?apiKey=d31a85f5dffc42c38e3823ed8854aab9&language=en&country=us`, null )
    .then((response) => {
      console.log("response call channel", response.data)
      return response.data
    })
    .catch(err => {
      throw err;
    });
} 


