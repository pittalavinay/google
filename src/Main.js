import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import {Stack,Avatar} from '@mui/material'
import {Tooltip} from '@mui/material'
import "./App.css"
import { get } from './Googlereducer';
import { useDispatch } from 'react-redux';
import Avatars from './Avatars';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Compose from './Compose';
import AppsIcon from '@mui/icons-material/Apps';
import {IconButton} from '@mui/material';
const Main = () => {
  const[data,setdata]=useState({
    name:" ",
    url:" "
  })
  const dispatch=useDispatch();
  
  const submitHandler =e=>{
    e.preventDefault();
    dispatch(get(data))
    console.log(data)
  }
  return (
    <div>
      <div className='app'>
        <div className='gmail'> <a href='#'>Gmail</a>
          </div>
          <div className='gmail'> <a href='#'>images</a>
          </div>
          <div className='gmail'>
          <IconButton> <Tooltip title='googleapps' arrow>
<AppsIcon/></Tooltip></IconButton>

  </div>
      <div><AccountCircleIcon/></div>
        
        </div>
      <center>
            <div className='google'>
            <div className='G'>G</div>
            <div className='o' >o</div>
            <div className='oo'>o</div>
            <div className='g'>g</div> 
            <div className='l'>l</div>
            <div className='e'>e</div>
            </div>
            <div>
                  <form autoComplete='true'>
                        
                  <input type="text" className='text' placeholder='Search Google or a type Url'></input>
                  <div className='search'><SearchIcon/></div>
                  <div className='voice'><KeyboardVoiceIcon/></div>
                  </form>
            </div>
            <Stack className='avatar'>
            <div type="button" className='button' data-bs-toggle="modal" data-bs-target="#myModal">
            <Avatar>+</Avatar>
</div>
            </Stack>
           <Avatars/>
            <div class="container mt-3">
 
</div>


<div class="modal" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
<form onSubmit={submitHandler}>
  <p className='add'>Add shortcut</p>
  <p className='name'>Name</p>
   <input type='text' className='text2' value={data.name} onChange={(e)=>setdata({...data,name:e.target.value})}></input><br/>
   <p className='name'>URL</p>
   <input type='text' className='text2' value={data.url} onChange={(e)=>setdata({...data,url:e.target.value})}></input><br/><br/><br/><br/>
   <button type="button"  data-bs-dismiss="modal" className='in'>Cancel</button>
   <input type="submit" value='Done' className='inp' data-bs-dismiss="modal"></input>
   </form>
    </div>
  </div>
</div>

      </center>
    </div>
  )
}

export default Main