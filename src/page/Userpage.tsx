import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CustomPaginationActionsTable from '../components/Table';
import { deleteUserAction, fetchUser } from '../features/user/userAction';
import { User } from '../type';

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

  function handleDetailAction(event: User) {
    // console.log('The Values that you wish to edit ', event);
    navigate(`/users/detail/${event.id}`);
  }

  function handleUpdateAction(event: User) {
    // console.log('The Values that you wish to edit ', event);
    navigate(`/users/update/${event.id}`);
  }

  function handleAddUser() {
    navigate('/users/add');
  }
  return (
    <Container maxWidth={'xl'}>
      <h1>Pengguna User</h1>
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
        handleView={handleDetailAction}
        handleUpdate={handleUpdateAction}
      />
    </Container>
  );
}
