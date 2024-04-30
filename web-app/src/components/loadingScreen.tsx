import React from 'react'
import { CircularProgress } from '@mui/material'

function LoadingScreen() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress color="secondary"/>
    </div>
  )
}

export default LoadingScreen