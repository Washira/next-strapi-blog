import axios from 'axios'

axios.defaults.withCredentials = true
const timeout = 30000

export const api = axios.create({
  baseURL: process.env.STRAPI_API_URL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const timestamp =
    new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }) +
    ' ' +
    new Date().toLocaleDateString('en-US')
  console.log(`[${timestamp}] ${config.method}: ${config.url}`)
  config.headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`
  return config
})

// create interceptor to automatically return data from response
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default api
