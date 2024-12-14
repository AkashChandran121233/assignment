import React from 'react'

export default function Addproduct() {
  return (
    <div style={{width:'450px',height:'450px',backgroundColor:'black',display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center',marginLeft:'550px',marginTop:'50px'}}>
        <form style={{padding:'8rem'}}>
            <div><h2 style={{color:'white',marginBottom:'50px'}}>Add product</h2></div>
            <div>
                <label style={{color:'white',fontFamily:'-moz-initial',fontSize:'20px',marginBottom:'20px'}}>Product name</label>
                <input placeholder='Enter the product name'></input>
            </div>
            <div>
                <label style={{color:'white'}}>Prize</label>
                <input placeholder='Enter the price' />
            </div>
            <div>
                <label style={{color:'white'}}> category</label>
                <input placeholder='Enter the category' />
            </div>
            <div>
                <button style={{color:'black'}}>Add image</button>
            </div>
        </form>
    </div>
  )
}
