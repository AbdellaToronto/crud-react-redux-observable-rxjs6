import * as React from 'react';
import { Snackbar, Button, IconButton } from 'material-ui';
import CloseIcon from '@material-ui/icons/Close';

export const SimpleSnackbar = (props: {open: boolean, handleClose: any, message: string}) =>
  (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={props.handleClose}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{props.message}</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={props.handleClose}>
            Dismiss
          </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={props.handleClose}
          >
            <CloseIcon/>
          </IconButton>,
        ]}
      />
  );
