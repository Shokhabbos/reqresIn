import axios from "axios";

const myaxios = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers:{
      "Content-type":"application/json"
    }
  });

  export { myaxios };