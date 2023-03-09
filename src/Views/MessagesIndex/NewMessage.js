import React, { useState } from 'react'

import { Button, Grid, TextField,} from '@mui/material'
import { Box } from '@mui/system'
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

import { v4 as uuidv4 } from 'uuid'

function NewMessage(props) {

  const [shouldShowError, setShouldShowError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault()

    const newMessage = {
      id: uuidv4().replaceAll('-', '').substring(0, 24),
      to: event.target.elements.to.value,
      from: event.target.elements.from.value,
      message: event.target.elements.message.value
    }

    if(!newMessage.to || !newMessage.from || !newMessage.message) {
      setShouldShowError(true)
      console.error("User tried to submit new message with one or more empty fields.")
    } else {
      setShouldShowError(false)
      fetch(`https://vlhjn5wxv6.execute-api.ca-central-1.amazonaws.com/messages`, {
        method: 'POST',
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
      })
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }

  }


  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{border: 1, borderRadius: 3, marginTop: 2}}> 
        <Grid item xs={11}>
            {shouldShowError ? <Alert severity='error'>You must fill out all fields in order to post a new message!</Alert> : <></>}
        </Grid>
        <Grid item xs={3}>
          <TextField variant='standard'
          id="from"
          label='From' />
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
          <TextField variant='standard'
          id="to"
          label='To'/>
        </Grid>
        <Grid item xs={3}>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{maxWidth: "85%"}}>
            <TextField fullWidth multiline minRows={2} variant='outlined' id="message" placeholder='Message body...'/>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{marginBottom: 2}}
          >
            <Button variant="contained" type='submit' endIcon={<SendIcon/>}>Send</Button>
            <Button variant='standard' onClick={() => props.setShowNewMessageForm(false)}>Cancel</Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

export default NewMessage