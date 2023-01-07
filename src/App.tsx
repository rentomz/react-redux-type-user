import Header from './components/Header';
import CustomPaginationActionsTable from './components/Table';
import Container from '@mui/material/Container';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useAppDispatch, useAppSelector} from './app/hooks'
import {fetchUser} from './features/user/userAction'


function App() {
  const dispatch = useAppDispatch();
  const allUser = useAppSelector(state=>state.users.users);

  useEffect(()=> {
    dispatch(fetchUser())
  })
  // useEffect(() => {
  //   const getDataUser = async () => {
  //     await axios({
  //       method: 'get',
  //       url: '/users',
  //     })
  //       .then((response) => {
  //         console.log("success");
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //       .finally(() => {
  //         console.log('finish');
  //       });
  //   };
  //   getDataUser();
  // }, []);
  return (
    <div className="App">
      <Header />
      <Container maxWidth={'xl'}>
        <h1>Buat Penggunaan</h1>
        <CustomPaginationActionsTable users={allUser} />
      </Container>
    </div>
  );
}

export default App;
