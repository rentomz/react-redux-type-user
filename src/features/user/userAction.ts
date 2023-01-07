import userSlice from './userSlice'
import {AnyAction, ThunkAction} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import {User} from '../../type'
import UserService from '../../service/userService'

export const userAction=userSlice.actions

export const fetchUser=():ThunkAction<void,RootState,unknown,AnyAction>=> {
  return async(dispatch,getState)=>{
    if(getState().users.users.length == 0) {
      const response:User[]= await UserService.getAllUser();
      dispatch(userAction.setUser(response))
    }
  }
}