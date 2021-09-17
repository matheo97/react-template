import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
})

instance.interceptors.response.use(
  response => response,
  async error => {
    const { message: defaultMessage, response } = error
    let message = 'Something went wrong'
    if (response && response.data) {
      message = response.data.message || response.data.error || defaultMessage
      if (Array.isArray(message)) {
        message = message.join('\n')
      }
    }
    return Promise.reject({ message })
  }
)

export default instance
