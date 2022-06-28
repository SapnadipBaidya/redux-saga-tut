import axios from "axios"; 

const url = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
  return axios.get(url)
  .then((response) => response.data)
  .catch(function (error) {
    // handle error
    console.log(error);
    return error;
  })
};



export default fetchGetUsers;
