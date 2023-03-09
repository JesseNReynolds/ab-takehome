import React, { useEffect, useState } from 'react'

import { CircularProgress, Stack } from '@mui/material';
import { Box } from '@mui/system';

import UserCard from './UserCard';

export default function UsersIndex() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://vlhjn5wxv6.execute-api.ca-central-1.amazonaws.com/users');
      const json = await data.json();
      setUsers(json);
      setLoading(false)
    }

    fetchData()
      .catch(err => {console.error(err); setLoading(false)})
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
      sx={{maxWidth: "85%"}}
    >
      {loading ? <CircularProgress/> : users.map(user => <UserCard user={user} key={user._id}></UserCard>)}
    </Stack>
    </Box>
  )

}
