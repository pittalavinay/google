import React from 'react'
import { Avatar,Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import './App.css'
const Avatars = () => {
  const data=useSelector(state=>state.Googlereducer.google)
  return (
    <div>
        <Stack>
        <div className='av'>
          <div className='row'>
     { data.map(item=> <div className='col-md-2'><div className='avm'><Avatar className='tar'>{item.url}</Avatar>{item.name}<br/><br/><br/><br/><br/><br/></div></div>)}
     </div>
     </div>
        </Stack>
    </div>
  )
}

export default Avatars