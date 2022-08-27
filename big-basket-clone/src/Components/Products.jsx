import { useEffect, useState } from "react";

export default function Products(props){
    const {name,category,option}=props;
    // let keys;
    const [opti,setOpti]=useState("");
    function changeopt(){
        let a=document.getElementById('opt').value;
        setOpti(a);
    }
    // useEffect(()=>{
    //     keys=Object.keys(option).forEach((key)=>{
    //         return (<option value={key}>{key}</option>)
    //     });
    // },[]);
    useEffect(()=>{
        if(opti===""){
            changeopt();
            console.log('yes');
        }
        console.log(opti);
        },[opti]);
    
    return (<div>
        {opti?(<div><div>
                {option[opti]['discount']}
            </div>
            <div>
                <img src={option[opti].image} alt="items" />
            </div>
            <div>
                <p>{category}</p>
                <p>{name}</p>
            </div>
            <div>
                {props.rating?<p>{props.rating}</p>:""}
                {props.rating?<p>{props.ratingCount}</p>:""}
                
            </div>
            <select onChange={changeopt} id='opt'>
            {Object.keys(option).map((key)=>{
            return (<option value={key}>{key}</option>)
        })}
            </select>
            <div>
                <p><del>Rs{option[opti].price}</del> Rs {option[opti]['dis-price']}</p>
                <p>Standarad Delivery: Today 9:00 AM - 11:00 AM</p>
                <button disabled>Qty</button><input /><button>Add</button>
            </div></div>):""}
            
    </div>);
}