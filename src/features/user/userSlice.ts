import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserState } from '../../type'



// Define the initial state using that type
const initialState: UserState = {
  users:[],
  detail: {
    id: 0,
    name: "",
    email: "",
    gender: "",
    status: "",
  }
}


export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action : PayloadAction<User[]>) => {
      state.users=action.payload;
    },
    setUserDetail: (state, action : PayloadAction<User>) => {
      state.detail=action.payload;
    },

    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  }
})

// export const { setUser, } = userSlice.actions

// export default userSlice.reducer
export default userSlice