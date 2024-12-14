import React from 'react'
//import {button} from 'react-router-dom'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{marginTop:'25px',marginRight:'10px'}}>
            <h1 style={{color:'white',padding:'5px',marginLeft:'10px'}}>Cart.com</h1>
        </div>
        <div style={{marginTop:'35px',marginRight:'10px'}}>
            <Link to = '/'  style={{
                width:'300px',
                padding:'14px',
                marginBottom:'35px',
                borderRadius:'25px',
                fontSize:'20px',
                backgroundColor:'#F8FAFC',
                textAlign:'center',
                textDecoration:'none',
                color:'black',
                paddingTop:'5px',
                marginRight:'10px'
                          
                
            }}>Home</Link>
            <Link to = '/addproduct'  style={{
                width:'250px',
                padding:'14px',
                marginBottom:'35px',
                borderRadius:'25px',
                fontSize:'20px',
                backgroundColor:'#F8FAFC',
                textAlign:'center',
                textDecoration:'none',
                color:'black',
                paddingTop:'5px'
                          
                
            }}>Add Product</Link>
        </div>
    </div>
  )
}

export default Navbar