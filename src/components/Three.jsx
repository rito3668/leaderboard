import React from 'react'
import { Card, CardContent, Typography, Grid, Avatar, Stack, Box } from '@mui/material';
function Three({data}) {
  return (
    <div class="top-three-container">
  <div class="top-card silver">
    <img class="crown" src="/silver-crown.png" alt="Silver Crown" />
    <img class="avatar" src={data[1].avatar} alt="User 2"/>
    <div>{data[1].name}</div>
    <div class="medal">{data[1].points}</div>
  </div>

  <div class="top-card gold">
    <img class="crown" src="/gold-crown.png" alt="Gold Crown" />
    <img class="avatar" src={data[0].avatar} alt="Mystery"/>
    <div>{data[0].name}</div>
    <div class="medal">{data[0].points}</div>
  </div>

  <div class="top-card bronze">
    <img class="crown" src="/bronze-crown.png" alt="Bronze Crown" />
    <img class="avatar" src={data[2].avatar} alt="User 3"/>
    <div>{data[2].name}</div>
    <div class="medal">{data[2].points}</div>
  </div>
</div>
  )
}

export default Three
