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
            console.log(res);
            setData([...res]);
        })
    },[])
        
  return (
    <>
      <Carousel autoplay>
    {/* <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
    {data.map((el)=>{
        return (
            <div key={el.id}>
            <img src={el.image} alt={el.id} />
            <h5 style={contentStyle}>{el.t1}<br/>{el.t2}</h5>
            </div>
        )
    })}
  </Carousel>
    </>
  );
}

export default CarouselTop;
