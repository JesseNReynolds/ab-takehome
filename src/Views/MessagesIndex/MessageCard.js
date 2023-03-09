import React from 'react'

import { Grid, Typography } from '@mui/material'

import moment from 'moment'

import DeleteMessageButton from './DeleteMessageButton';


function MessageCard(props) {

  const readableTimeStamp = moment(props.message.created_at).format("dddd, MMMM Do YYYY, h:mma");

  return (
    <Grid container spacing={2} key={props.message._id} sx={{border: 1, borderRadius: 3, marginTop: 2}}>
      <Grid item xs={5}>
        <Typography variant='h4' color="primary">From: {props.message.from}</Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant='h4' color="secondary">To: {props.message.to}</Typography>
      </Grid>
      <Grid item xs={1}>
        <DeleteMessageButton messageId={props.message._id} removeMessage={props.removeMessage}></DeleteMessageButton>
      </Grid>
      <Grid item xs={12}>
          <Typography variant='subtitle1' color="initial">Sent: {readableTimeStamp}</Typography> 
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' color='initial'>{props.message.message}</Typography>
      </Grid>
    </Grid>
  )}

export default MessageCard
