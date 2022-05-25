import axios, { AxiosRequestHeaders, AxiosResponse, AxiosError } from 'axios'
import { AuthInfo } from '@/types/user'

const endpointUrl = 'http://localhost:9004'

interface RequestConfig {
  method: string
  url: string
  headers: AxiosRequestHeaders
  data: AuthInfo
  withCredentials: boolean
}

export default class Auth {
  login(authInfo: AuthInfo) {
    const config: RequestConfig = {
      method: 'POST',
      url: endpointUrl + '/api/signin',
      headers: { 'Content-Type': 'application/json' },
      data: authInfo,
      withCredentials: true,
    }
    return axios
      .request(config)
      .then((res: AxiosResponse) => {
        const { data } = res
        return data
      })
      .catch((error: AxiosError<{ error: string }>) => {
        throw error
      })
  }

  register(authInfo: AuthInfo) {
    const config: RequestConfig = {
      method: 'POST',
      url: endpointUrl + '/api/signup',
      headers: { 'Content-Type': 'application/json' },
      data: authInfo,
      withCredentials: true,
    }
    return axios
      .request(config)
      .then((res: AxiosResponse) => {
        const { data } = res
        return data
      })
      .catch((error: AxiosError<{ error: string }>) => {
        throw error
      })
  }

  logout() {
    return axios
      .post(endpointUrl + '/api/signup', null, { withCredentials: true })
      .then((res: AxiosResponse) => {
        const { data } = res
        return data
      })
      .catch((error: AxiosError<{ error: string }>) => {
        throw error
      })
  }
}
