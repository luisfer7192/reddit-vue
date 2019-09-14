import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API_URL // put the base url here
})

export default instance
