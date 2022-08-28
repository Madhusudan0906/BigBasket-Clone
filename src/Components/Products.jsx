import { useEffect, useState } from "react";
import stylesa from "./allcss.module.css";

export default function Products(props){
    const {name,category,option}=props;
    // let keys;
    const [opti,setOpti]=useState("");
    function changeopt(){
        let eid=props.id
        let a=document.querySelector(`#opti${eid}`).value;
        setOpti(a);
    }
    // useEffect(()=>{
    //     keys=Object.keys(option).map((key)=>{
    //         return (<option value={key}>{key}</option>)
    //     });
    // },[]);
    useEffect(()=>{
            if(option){
                changeopt();
            }
        },[option]);
    
    return (<div key={props.id}>
        <div className={stylesa.items}><div>
                
                {opti&&(option[opti]['discount']?<p style={{textAlign:"right",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",marginBottom:"2px",color:"red"}}>Get {option[opti]['discount']}% Off</p>:option[opti]['discountr']?<p style={{textAlign:"right",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",marginBottom:"2px",color:"red"}}>Save Rs{option[opti]['discountr']} </p>:"")}
            </div>
            <div>
                <img src={opti&&option[opti].image} alt="items" />
            </div>
            <div>
                <p>{category}</p>
                <p>{name}</p>
            </div>
            {props.rating&&<div style={{display:"flex"}}>
                {props.rating?<p style={{backgroundColor:"green",padding:"1px 5px"}}>{props.rating} Star</p>:""}&nbsp;
                {props.rating?<p>{props.ratingCount} Rating</p>:""}
                
            </div>}
            <select onChange={changeopt} id={`opti${props.id}`} >
            {Object.keys(option).map((key)=>{
            return (<option value={key}>{key}</option>)
        })}
            </select>
            <div style={{backgroundColor:"grey",padding:"3px"}}>
                <p><del>Rs{opti&&option[opti].price}</del> <span style={{fontSize:"18px"}}>Rs {opti&&option[opti]['dis-price']}</span></p>
                <p>Standarad Delivery: Today 9:00 AM - 11:00 AM</p>
                <button disabled>Qty</button><input value='1'/><button>Add</button>
            </div></div>
            
    </div>);
}