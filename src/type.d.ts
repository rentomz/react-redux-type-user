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

export interface UserState {
  users: User[]
  detail: User
}