import { Todo } from '../types/todo'

export interface RootState {
  version: string
}

export interface TodosState {
  todos: Todo[]
}
