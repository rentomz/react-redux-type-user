import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';
import {
  Box, Button
} from '@mui/material';

function DialogDelete(props: any) {
  return (
    <div
      className={props.trigger ? 'modal display-block' : 'modal display-none'}
    >
      <section className="modal-main " style={{ padding: '20px' }}>
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
            <span style={{ marginRight: '10px' }}>
              <WarningIcon
                color="error"
                height={200}
                style={{ textAlign: 'center', justifyItems: 'center' }}
              />
            </span>
            Delete Todo
          </h1>
          <Button
            type="button"
            style={{ padding: '0px', margin: '0px' }}
            onClick={() => props.setTrigger(false)}
          >
            <CloseIcon />
          </Button>
        </Box>
        <div className="main" style={{ paddingTop: '32px' }}>
          <h1 className="text-sm ">
            Are you sure want to delete this task? your action can’t be
            reverted.
          </h1>
          <div
            className="footer float-right mt-6"
            style={{ marginTop: '20px', float: 'right' }}
          >
            <Button
              color="error"
              onClick={() => {
                props.deleteData();
              }}
            >
              Delete Todo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DialogDelete;
