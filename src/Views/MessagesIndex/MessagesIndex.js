import { Box, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MessageCard from './MessageCard';


export default function MessagesIndex() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://vlhjn5wxv6.execute-api.ca-central-1.amazonaws.com/messages');
      const json = await data.json();
      setMessages(json);
      console.log(json)
    }

    fetchData()
      .catch(err => console.error(err))

  }, [])

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{maxWidth: "95%"}}
    >
      {messages.map(message => <MessageCard message={message} key={message._id}></MessageCard>)}
    </Stack>
    </Box>
  )

}