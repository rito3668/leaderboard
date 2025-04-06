import React from 'react'

import { Pagination, Stack } from '@mui/material';
function ControlPages({currentPage,setPage,totalPages}) {
  return (
    <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(e, value) => setPage(value)}
      color="secondary"
    />
  </Stack>
  )
}

export default ControlPages