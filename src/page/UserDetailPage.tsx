import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUserDetail } from '../features/user/userAction';

export default function UserDetailPage() {
  const dispatch = useAppDispatch();
  let { id } = useParams();
  var idParams = Number(id);

  const DetailUser = useAppSelector((state) => state.users.detail);
  useEffect(() => {
    dispatch(fetchUserDetail(idParams));
  });
  return (
    <div>
      <Container maxWidth={'xl'} style={{ padding: '32px 16px' }}>
        <Typography variant="h6" gutterBottom>
          Name
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {DetailUser.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Email
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {DetailUser.email}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Gender
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {DetailUser.gender}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Status
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {DetailUser.status}
        </Typography>
      </Container>
    </div>
  );
}
