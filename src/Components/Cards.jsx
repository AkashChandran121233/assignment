import React from 'react'
import { useState, useEffect} from 'react';

function Cards() {
    const url = " https://fakestoreapi.com/products";
    const [data,setdata] = useState([]); 

    const fetchInfo = ()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((d)=> setdata(d))
    }

    useEffect(() => {
        fetchInfo();
    }, []);

  return (
    <div>
        <div style={{display:'flex',
            flexWrap:'wrap',
            padding:'5rem',
            marginLeft:'35px',
            marginRight:'40px',
            justifyContent:'space-around'}}>
            {data.map((dataObj,index)=>(
                <div style={{
                    backgroundColor:'white',
                    width:'600px',
                    height:'200px',
                    marginLeft:'0px',
                    marginRight:'40px',
                    marginTop:'30px',textAlign:'center',
                    fontSize:'20px'
                    }}>
                     <p>Title   :{'\t'}{dataObj.title}</p>
                     <p>Prize   :   {dataObj.price}</p>
                     <p>Category   :   {dataObj.category}</p>
                     <img src={dataObj.image} style={{width:'100px',height:'100px'}} alt=''/>
                </div>
               
            ))}
        </div>
    </div>
  )
}

export default Cards