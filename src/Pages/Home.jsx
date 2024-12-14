import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='Top' style={{
            height:'100px',backgroundColor:'black'
        }}>
            <Navbar/>   
        </div>
        <div className='Bottom'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home