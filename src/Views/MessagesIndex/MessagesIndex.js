import React, { useEffect, useState } from 'react'

import { Box, Stack } from '@mui/material';

import MessageCard from './MessageCard';
import NewMessage from './NewMessage';
import ComposeNewMessageButton from './ComposeNewMessageButton';

export default function MessagesIndex() {

  const [messages, setMessages] = useState([])
  const [showNewMessageForm, setShowNewMessageForm] = useState(false)

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

  function removeMessage(id) {
    const index = messages.findIndex(message => message._id === id)
    let copy = [...messages]
    copy.splice(index, 1)
    setMessages(copy)
  }

  return (
    <Box
      display="flex"
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{maxWidth: "85%"}}
        >

        {showNewMessageForm ? 
        <NewMessage setShowNewMessageForm={setShowNewMessageForm}> </NewMessage> 
        : <ComposeNewMessageButton setShowNewMessageForm={setShowNewMessageForm}></ComposeNewMessageButton>}
        
        {messages.map(message => <MessageCard message={message} key={message._id} removeMessage={removeMessage}></MessageCard>)}
      </Stack>
    </Box>
  )

}