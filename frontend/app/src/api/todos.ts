import axios, { AxiosRequestHeaders, AxiosResponse, AxiosError } from 'axios'

const endpointUrl = 'http://localhost:9004'

const readTodo = async (userId:number) => {
    const res = await axios.post(endpointUrl + `/api/todos/${userId}`)
    return res.data
}

export {readTodo}