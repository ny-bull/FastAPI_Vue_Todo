import { Todo } from './todo'

export interface User {
  id: number
  email: string
  password: string
  todos: Todo[]
}
