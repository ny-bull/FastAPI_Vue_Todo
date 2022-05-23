import { Todo } from './todo'

export interface User {
  id: number
  email: string
  password: string
  todos: Todo[]
}

export interface AuthInfo {
  email: string
  password: string
}

export interface UserState {
  userId: number
}
