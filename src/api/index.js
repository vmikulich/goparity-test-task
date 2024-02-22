import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

const get = ({ url, params }) => {
  return axios.get(url, { params })
}

export default {
  get,
}
