import { Grid, Typography } from '@mui/material'
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppBadIcon from '@mui/icons-material/GppBad';
import React from 'react'

function UserCard(props) {

  return (
    <Grid container spacing={2} key={props.user._id} sx={{border: 1, borderRadius: 3, marginTop: 2}}>
      <Grid item xs={12}>
        <Typography variant='h2' color="primary">{props.user.firstName}</Typography>
      </Grid>
      <Grid item xs={1}/>
      <Grid item xs={7}>
        <Typography variant='body1' color="initial">State: {props.user.state}</Typography>
      </Grid>
      <Grid item xs={2}>
          <Typography variant='body1' color="initial">Verified: </Typography> 
      </Grid>
      <Grid item xs={2}>
      {props.user.isVerified? <GppGoodIcon color='success'/> : <GppBadIcon color='error'/>}
      </Grid>
    </Grid>
  )
}

export default UserCard