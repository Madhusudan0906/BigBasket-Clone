import { useEffect, useState } from "react";

export default function Products(props){
    const {name,category,option}=props;
    let keys;
    const [opti,setOpti]=useState("");
    function changeopt(){
        let eid=props.id
        let a=document.querySelector(`#opti${eid}`).value;
        setOpti(a);
    }
    useEffect(()=>{
        keys=Object.keys(option).map((key)=>{
            return (<option value={key}>{key}</option>)
        });
    },[]);
    useEffect(()=>{
            if(option&&keys){
                changeopt();
            }
        },[option]);
    
    return (<div>
        <div><div>
                {opti&&option[opti]['discount']}
            </div>
            <div>
                <img src={opti&&option[opti].image} alt="items" />
            </div>
            <div>
                <p>{category}</p>
                <p>{name}</p>
            </div>
            <div>
                {props.rating?<p>{props.rating}</p>:""}
                {props.rating?<p>{props.ratingCount}</p>:""}
                
            </div>
            <select onChange={changeopt} id={`opti${props.id}`} >
            {Object.keys(option).map((key)=>{
            return (<option value={key}>{key}</option>)
        })}
            </select>
            <div>
                <p><del>Rs{opti&&option[opti].price}</del> Rs {opti&&option[opti]['dis-price']}</p>
                <p>Standarad Delivery: Today 9:00 AM - 11:00 AM</p>
                <button disabled>Qty</button><input /><button>Add</button>
            </div></div>
            
    </div>);
}