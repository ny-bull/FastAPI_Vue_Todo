import axios, { AxiosRequestHeaders } from 'axios';
import { AuthInfo } from '@/types/user';

const endpointUrl = "http://localhost:8080";

interface RequestConfig {
    method:string
    url:string
    headers:AxiosRequestHeaders
    data:AuthInfo
}

export default class Auth {

    login(authInfo:AuthInfo) {
        const config:RequestConfig  = {
            method:"post",
            url :endpointUrl,
            headers: { "Content-Type": "application/json" },
            data:authInfo
        }
        return axios.request(config)
        .then(res => res)
        .catch(error => { throw error })
    }
}