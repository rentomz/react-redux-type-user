import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box, Button, Grid, IconButton, List,
  ListItem, ListItemText, Typography
} from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import DialogDelete from '../components/DialogDelete';
import Popup from '../components/Popup';
import {
  addUserTodo,
  deleteTodoAction,
  fetchUserDetail,
  getUserTodo
} from '../features/user/userAction';

export default function UserDetailPage() {
  //Popup
  const [popupButton, setPopupButton] = useState(false);
  const [popupDelete, setPopupDelete] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [idItem, setIdItem] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  let { id } = useParams();
  var idParams = Number(id);

  const DetailUser = useAppSelector((state) => state.users.detail);
  const TodoUser = useAppSelector((state) => state.users.todo);
  useEffect(() => {
    dispatch(fetchUserDetail(idParams));
    dispatch(getUserTodo(idParams));
  }, []);

  const [dense, setDense] = useState(false);

  function handleAdd() {
    dispatch(addUserTodo(DetailUser, title, body));
    setPopupButton(false);
  }
  function handleDelete() {
    dispatch(deleteTodoAction(idItem!));
    setPopupDelete(false);
  }

  const listItems = TodoUser.map((todo) => (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton
          onClick={() => {
            setPopupDelete(true);
            setIdItem(todo.id);
          }}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={todo.title} secondary={todo.body} />
    </ListItem>
  ));
  return (
    <div>
      <Container maxWidth={'xl'} style={{ padding: '32px 16px' }}>
        <Typography variant="h4" gutterBottom>
          Detail User
        </Typography>
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

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={12}
            style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              <Typography variant="h6" component="div">
                List Todo
              </Typography>
              <Button
                variant="outlined"
                style={{
                  zIndex: '99',
                  float: 'right',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setPopupButton(true);
                }}
              >
                Add User
              </Button>
            </Box>

            <List dense={dense}>{listItems}</List>
          </Grid>
        </Grid>
      </Container>
      <Popup
        trigger={popupButton}
        setTrigger={setPopupButton}
        valTitle={title}
        setTitle={setTitle}
        valBody={body}
        setBody={setBody}
        saveData={handleAdd}
      />

      <DialogDelete
        trigger={popupDelete}
        setTrigger={setPopupDelete}
        deleteData={handleDelete}
      />
    </div>
  );
}
