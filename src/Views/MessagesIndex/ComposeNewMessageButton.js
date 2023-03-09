import { Box, Button } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';



function ComposeNewMessageButton(props) {
  return (
    <Box sx={{marginTop: 2}}>
      <Button variant='contained' onClick={() => props.setShowNewMessageForm(true)}endIcon={<CreateIcon/>}>Compose Message</Button> 
    </Box>
  )
}

export default ComposeNewMessageButton