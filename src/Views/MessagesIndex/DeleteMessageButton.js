import React, { useState } from 'react'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Button, DialogTitle, IconButton } from '@mui/material';

export default function DeleteMessageButton(props) {

  const [dialogOpen, setDialogOpen] = useState(false)

  function deleteMessage() {
    fetch(`https://vlhjn5wxv6.execute-api.ca-central-1.amazonaws.com/messages/${props.messageId}`, {
      method: 'DELETE',
    })
      .then(props.removeMessage(props.messageId))
      .catch(err => console.error(err))
    props.removeMessage(props.messageId)
  }

  return (
    <>
      <IconButton onClick={() => setDialogOpen(true)}>
        <DeleteForeverIcon />
      </IconButton>
      <Dialog
        open = {dialogOpen}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>This can't be undone.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setDialogOpen(false); deleteMessage()}}>
            Yes
          </Button>

          <Button onClick={() => setDialogOpen(false)}autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

