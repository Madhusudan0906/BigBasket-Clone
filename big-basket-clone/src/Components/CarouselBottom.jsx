import React from "react";
import { useEffect } from "react";
import { Carousel } from 'antd';
import { useState } from "react";
import styles from "./CarouselBottom.module.css";

function getImagesCB(){
    return (fetch('https://json-server-bb-clone.herokuapp.com/api/carouselBottomBB')
    .then((res)=>res.json())
    .catch((err)=>{console.log(err)}));
}


function CarouselBottom() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        getImagesCB().then((res)=>{
            console.log(res);
            setData([...res]);
        })
    },[])
        
  return (
    <div className={styles.bottomC}>
      <Carousel autoplay >
   
    {data.map((el)=>{
        return (
            <div key={el.id}>
            <img src={el.image} alt={el.name} />
            </div>
        )
    })}
  </Carousel>
    </div>
  );
}

export default CarouselBottom;
