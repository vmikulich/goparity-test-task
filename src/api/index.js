import axios from 'axios'

const Get = ({ url, params }) => {
  return axios.get(url, { params })
}

export default {
  Get,
}
