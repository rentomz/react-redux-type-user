import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CustomPaginationActionsTable from '../components/Table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUser, deleteUserAction } from '../features/user/userAction';
import { User, UserState } from '../type';
import { useNavigate } from 'react-router-dom';

export default function Userpage() {
  //Route
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const allUser = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUser());
  });

  function handleDeleteAction(event: User) {
    // console.log('The Values that you wish to edit ', event);
    if (window.confirm(`Are you sure you want to delete this ${event.name}?`)) {
      // Here you can put your logic or function that needs to be executed as per the use case.
      dispatch(deleteUserAction(event.id));
    }
  }

  function handleAddUser() {
    navigate('/users/add');
  }
  return (
    <Container maxWidth={'xl'}>
      <h1>Pengguna</h1>
      <Button
        variant="outlined"
        style={{ marginBlock: '32px', float: 'right' }}
        onClick={handleAddUser}
      >
        Add User
      </Button>

      <CustomPaginationActionsTable
        users={allUser}
        handleDelete={handleDeleteAction}
      />
    </Container>
  );
}
