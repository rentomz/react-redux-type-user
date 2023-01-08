import userSlice from './userSlice'
import {AnyAction, ThunkAction} from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import {User, UserAdd} from '../../type'
import UserService from '../../service/userService'
import axios from 'axios';

export const userAction=userSlice.actions

export const fetchUser=():ThunkAction<void,RootState,unknown,AnyAction>=> {
  return async(dispatch,getState)=>{
    if(getState().users.users.length == 0) {
      const response:User[]= await UserService.getAllUser();
      dispatch(userAction.setUser(response))
    }
  }
}

export const addUserAction = (user : UserAdd):ThunkAction<void,RootState,unknown,AnyAction> => {
  return async (dispatch) => {
    await UserService.addUser(user);
    const response:User[]= await UserService.getAllUser();
    dispatch(userAction.setUser(response))
  }
}

export const deleteUserAction = (id :number):ThunkAction<void,RootState,unknown,AnyAction> => {
  return async (dispatch) => {
    await UserService.deleteUser(id);
    const response:User[]= await UserService.getAllUser();
    dispatch(userAction.setUser(response))
  }
}