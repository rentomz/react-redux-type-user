import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUserDetail, updateUserAction } from '../features/user/userAction';

export default function UserUpdatePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let { id } = useParams();
  var idParams = Number(id);

  const DetailUser = useAppSelector((state) => state.users.detail);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    dispatch(fetchUserDetail(idParams));
    setName(DetailUser.name);
    setEmail(DetailUser.email);
    setGender(DetailUser.gender);
    setStatus(DetailUser.status);
  }, [DetailUser]);

  function handleUpdate() {
    const data = {
      id: DetailUser.id,
      name: name,
      email: email,
      gender: gender,
      status: status,
    };
    console.log(data);
    dispatch(updateUserAction(data));
    navigate('/');
  }

  return (
    <div>
      <Container maxWidth={'xl'} style={{ padding: '32px 16px' }}>
        <h1>Buat User</h1>
        <form>
          <TextField
            style={{ width: 'auto', margin: '5px' }}
            type="text"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <TextField
            style={{ width: 'auto', margin: '5px' }}
            type="text"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            style={{ width: 'auto', margin: '5px' }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{ width: 'auto', margin: '5px' }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            style={{ width: 'auto', margin: '5px' }}
          >
            Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ width: 'auto', margin: '5px' }}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="inactive"
              control={<Radio />}
              label="In Active"
            />
          </RadioGroup>
          <br />
          <Button
            variant="contained"
            color="primary"
            style={{ width: 'auto', margin: '30px 5px 5px 5px' }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </form>
      </Container>
    </div>
  );
}
