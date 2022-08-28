import React from "react";
import { useEffect } from "react";
import { Carousel } from 'antd';
import { useState } from "react";
const contentStyle = {
    height: '60px',
    color: '#fff',
    lineHeight: '16px',
    textAlign: 'center',
    background: '#76EE00',
  };

function getImagesCT(){
    return (fetch('https://json-server-bb-clone.herokuapp.com/api/carouselTopBB')
    .then((res)=>res.json())
    .catch((err)=>{console.log(err)}));
}


function CarouselTop() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        getImagesCT().then((res)=>{
            // console.log(res);
            setData([...res]);
        })
    },[])
        
  return (
    <div style={{width:"100%"}}>
      <Carousel autoplay>
    {data.map((el)=>{
        return (
            <div key={el.id}>
            <img src={el.image} alt={el.id} width="100%"/>
            <h5 style={contentStyle}>{el.t1}<br/>{el.t2}</h5>
            </div>
        )
    })}
  </Carousel>
    </div>
  );
}

export default CarouselTop;
