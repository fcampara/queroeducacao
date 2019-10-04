import axios from 'axios'
import { baseURL } from '../constants/variables'

const api = axios.create({
  baseURL
})

export default api
