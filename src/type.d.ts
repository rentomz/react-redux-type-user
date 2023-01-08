// Define a type for the slice state
export interface User {
  id: number,
  name: string,
  email: string,
  gender: string,
  status: string,
}

export interface UserAdd {
  name: string,
  email: string,
  gender: string,
  status: string,
}

export interface Todo {
  id: number,
  user_id: string,
  title: string,
  body: string,
}

export interface UserState {
  users: User[]
  detail: User
  todo: Todo[]
}