import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import UserService from '../../service/userService'
import { Todo, User, UserAdd } from '../../type'
import userSlice from './userSlice'

export const userAction=userSlice.actions

export const fetchUser=():ThunkAction<void,RootState,unknown,AnyAction>=> {
  return async(dispatch,getState)=>{
    if(getState().users.users.length == 0) {
      const response:User[]= await UserService.getAllUser();
      dispatch(userAction.setUser(response))
    }
  }
}


export const fetchUserDetail=(id : number):ThunkAction<void,RootState,unknown,AnyAction>=> {
  return async(dispatch,getState)=>{
    if(getState().users.detail.id == 0) {
      const response:User= await UserService.getDetailUser(id);
      dispatch(userAction.setUserDetail(response))
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

export const updateUserAction = (user : User):ThunkAction<void,RootState,unknown,AnyAction> => {
  return async (dispatch) => {
    await UserService.updateUser(user);
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

export const getUserTodo=(id : number):ThunkAction<void,RootState,unknown,AnyAction>=> {
  return async(dispatch,getState)=>{
    if(getState().users.todo.length == 0) {
      const response:Todo[]= await UserService.getAllUserTodo(id);
      dispatch(userAction.setTodo(response))
    }
  }
}

export const addUserTodo=(user : User, title : string, body : string):ThunkAction<void,RootState,unknown,AnyAction>=> {
  return async(dispatch,getState)=>{
    await UserService.addTodo(user, title, body);
    const response:Todo[]= await UserService.getAllUserTodo(user.id);
      dispatch(userAction.setTodo(response))
  }
}

export const deleteTodoAction = (id :number):ThunkAction<void,RootState,unknown,AnyAction> => {
  return async (dispatch, getState) => {
    const dataInitial = getState().users.todo;
    console.log(dataInitial);
    const newList = dataInitial.filter((item) => item.id !== id);
    dispatch(userAction.setTodo(newList))
  }
}