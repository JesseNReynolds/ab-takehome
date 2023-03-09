import React, { useState } from 'react'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogTitle } from '@mui/material';

export default function DeleteMessageButton(props) {

  const [dialogOpen, setDialogOpen] = useState(false)

  function deleteMessage() {
    console.log(props.messageId)
    // fetch(`https://vlhjn5wxv6.execute-api.ca-central-1.amazonaws.com/messages/${props.messageId}`, {
    //   method: 'DELETE',
    // })
    //   .then(props.removeMessage(props.messageId))
    //   .catch(err => console.error(err))
    props.removeMessage(props.messageId)
  }

  return (
    <>
      <DeleteForeverIcon onClick={() => setDialogOpen(true)}/>
      <Dialog
        open = {dialogOpen}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>This can't be undone.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={() => {setDialogOpen(false); deleteMessage()}}>
            Yes
          </button>

          <button onClick={() => setDialogOpen(false)}autoFocus>
            No
          </button>
        </DialogActions>
      </Dialog>
    </>
  )
}

