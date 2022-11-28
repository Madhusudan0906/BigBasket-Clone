import { Heading } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
const contentStyle = {
  paddingTop:"5px",
    height: '60px',
    color: '#e02b2b',
    lineHeight: '16px',
    textAlign: 'center',
    background: '#76EE00',
    textTransform:"uppercase",
    fontFamily:"andale mono,monospace"
  };

function getImagesCT(){
    return (fetch('https://bigbasket-json-server.onrender.com/api/carouselTopBB')
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
    },[]);
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay:true,
      swipeToSlide: true,
    };
        
  return (
    <div style={{width:"100%",margin:"auto",height:"fit-content",overflow: "hidden",outline:"none"}}>
      {/* <Carousel autoplay> */}
      <Slider {...settings} style={{width:"100%",margin:"auto"}}>
    {data.map((el)=>{
        return (
            <div key={el.id}>
            <img src={el.image} alt={el.id} width="100%"/>
            <Heading size="md" style={contentStyle} >{el.t1}<br/>{el.t2}</Heading>
            </div>
        )
    })}
    </Slider>
  {/* </Carousel> */}
    </div>
  );
}

export default CarouselTop;
