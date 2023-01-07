// Define a type for the slice state
export interface User {
  id: number,
  name: String,
  email: String,
  gender: String,
  status: String,
}

export interface UserState {
  users: User[]
}