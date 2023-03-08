import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

export default function UsersIndex() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    // const fetchData = async () => {
    //   const data = await fetch('https://vlhjn5wxv6.execute-api.ca-central-1.amazonaws.com/users');
    //   const json = await data.json();
    //   setUsers(json);
    //   console.log(json)
    // }

    // fetchData()
    //   .catch(err => console.error(err))

    setUsers([
        {
        _id: "6408fcc14d96f11ed561941a",
        firstName: "Layla",
        birthdate: "1949-10-26",
        isVerified: false,
        state: "New Mexico"
        },
        {
        _id: "6408fcc14d96f11ed561941c",
        firstName: "Price",
        birthdate: "1960-05-27",
        isVerified: true,
        state: "Virginia"
        },
        {
        _id: "6408fcc14d96f11ed561941b",
        firstName: "Jerald",
        birthdate: "1995-02-01",
        isVerified: true,
        state: "Washington"
        },
        {
        _id: "6408fcc14d96f11ed5619421",
        firstName: "Ethan",
        birthdate: "1969-12-09",
        isVerified: true,
        state: "New Hampshire"
        },
        {
        _id: "6408fcc14d96f11ed5619420",
        firstName: "Myrtice",
        birthdate: "1997-09-17",
        isVerified: false,
        state: "Alabama"
        },
        {
        _id: "6408fcc14d96f11ed561941f",
        firstName: "Alexandra",
        birthdate: "1947-06-26",
        isVerified: true,
        state: "Maine"
        },
        {
        _id: "6408fcc14d96f11ed5619422",
        firstName: "Adela",
        birthdate: "1989-01-27",
        isVerified: false,
        state: "Louisiana"
        },
        {
        _id: "6408fcc14d96f11ed5619423",
        firstName: "Alicia",
        birthdate: "1990-10-14",
        isVerified: true,
        state: "Florida"
        },
        {
        _id: "6408fcc14d96f11ed5619424",
        firstName: "Simon",
        birthdate: "1996-03-08",
        isVerified: true,
        state: "Washington"
        },
        {
        _id: "6408fcc14d96f11ed5619425",
        firstName: "Colleen",
        birthdate: "1997-03-08",
        isVerified: true,
        state: "Hawaii"
        },
        {
        _id: "6408fcc14d96f11ed5619426",
        firstName: "Garrick",
        birthdate: "1995-03-08",
        isVerified: true,
        state: "Alaska"
        },
        {
        _id: "6408fcc14d96f11ed5619427",
        firstName: "Kale",
        birthdate: "2000-03-08",
        isVerified: true,
        state: "Missouri"
        },
        {
        _id: "6408fcc14d96f11ed5619428",
        firstName: "Sienna",
        birthdate: "1989-03-08",
        isVerified: true,
        state: "Idaho"
        },
        {
        _id: "6408fcc14d96f11ed5619429",
        firstName: "Clay",
        birthdate: "1991-03-08",
        isVerified: true,
        state: "Ohio"
        },
        {
        _id: "6408fcc14d96f11ed561942a",
        firstName: "Bailee",
        birthdate: "1999-03-08",
        isVerified: true,
        state: "Idaho"
        },
        {
        _id: "6408fcc14d96f11ed561941d",
        firstName: "Jaime",
        birthdate: "1997-09-28",
        isVerified: false,
        state: "Utah"
        },
        {
        _id: "6408fcc14d96f11ed561942c",
        firstName: "Chet",
        birthdate: "1979-03-08",
        isVerified: false,
        state: "Kentucky"
        },
        {
        _id: "6408fcc14d96f11ed561942d",
        firstName: "Dameon",
        birthdate: "1996-03-08",
        isVerified: true,
        isActive: true,
        state: "California",
        extId: "5d8f9df4-7177-4fd7-b22b-eab61626b5a2"
        },
        {
        _id: "6408fcc14d96f11ed561942e",
        firstName: "Jed",
        birthdate: "1992-03-08",
        isVerified: true,
        isActive: true,
        state: "Texas",
        extId: "28f80097-d77c-453d-ad89-cd8526a2b047"
        },
        {
        _id: "6408fcc14d96f11ed561941e",
        firstName: "Jacinthe",
        birthdate: "1955-06-04",
        isVerified: true,
        state: "Maine"
        },
        {
        _id: "6408fcc14d96f11ed561942b",
        firstName: "Jarvis",
        birthdate: "2001-03-08",
        isVerified: false,
        state: "North Dakota"
        }
      ])
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
      {users.map(user => <UserCard user={user} key={user._id}></UserCard>)}
    </Stack>
    </Box>
  )

}
