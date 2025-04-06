import React from 'react'
// import { Card, CardContent, Typography, List, ListItem, Avatar, Stack } from '@mui/material';
import Card from './Card'
import { Box, Stack } from '@mui/material'
function Others({data,startRank}) {
  console.log(data)
  return (
    <Stack alignItems="center" >
      <div>
      <div>
      {data.map((user,idx)=>(
        <Card rank={startRank+idx} photo={user.avatar} username={user.name} score={user.points} />
      ))}
      </div>
    </div>
    </Stack>
  )
}

export default Others