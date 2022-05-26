import { TodoPost, Todo } from '@/types/todo'
import axios from 'axios'

const endpointUrl = 'http://localhost:9004'

const readTodo = async (userId: number) => {
  const { data } = await axios.get(endpointUrl + `/api/todos/${userId}`, {
    withCredentials: true,
  })
  const todos: Todo[] = data
  return todos
}

const createTodo = async (userId: number, todo: TodoPost) => {
  const { data } = await axios.post(
    endpointUrl + `/api/todos/${userId}`,
    todo,
    { withCredentials: true }
  )
  return data
}

const deleteTodo = async (todoData: Todo) => {
  await axios.delete(endpointUrl + `/api/todo/${todoData.id}`, {
    withCredentials: true,
  })
}

const putTodo = async (todoData: Todo) => {
  await axios.put(
    endpointUrl + `/api/todo/${todoData.id}`,
    {
      title: todoData.title,
      description: todoData.description,
    },
    { withCredentials: true }
  )
}

export { readTodo, createTodo, deleteTodo, putTodo }
