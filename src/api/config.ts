import axios from 'axios'

export const API_URL = 'https://napss-server.onrender.com/api/'

export default function init() {
  axios.defaults.baseURL = API_URL
  axios.defaults.withCredentials = false
}
