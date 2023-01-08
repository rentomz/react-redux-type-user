import CloseIcon from '@mui/icons-material/Close';
import {
  Box, Button, TextField
} from '@mui/material';

function Popup(props: any) {
  return (
    <div
      className={props.trigger ? 'modal display-block' : 'modal display-none'}
    >
      <section className="modal-main rounded-xl" style={{ padding: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <h1
            className="text-lg font-bold text-primary-black "
            style={{ margin: '0px' }}
          >
            Create Todo
          </h1>
          <Button
            type="button"
            style={{ padding: '0px', margin: '0px' }}
            onClick={() => props.setTrigger(false)}
          >
            <CloseIcon />
          </Button>
        </Box>
        <div className="main" style={{ marginTop: '20px' }}>
          <form>
            <TextField
              style={{ width: '100%', margin: '5px' }}
              type="text"
              label="Title"
              variant="outlined"
              value={props.valTitle}
              onChange={(e) => props.setTitle(e.target.value)}
            />
            <br />

            <TextField
              style={{ width: '100%', margin: '5px' }}
              type="text"
              label="Body"
              variant="outlined"
              value={props.valBody}
              onChange={(e) => props.setBody(e.target.value)}
            />
            <br />
          </form>

          <div
            className="footer float-right mt-6"
            style={{ marginTop: '20px', float: 'right' }}
          >
            <Button
              onClick={() => {
                props.saveData();
              }}
            >
              Save Task
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Popup;
