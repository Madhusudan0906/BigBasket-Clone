import { useEffect, useState } from "react";

export default function Products(props){
    const {name,category,option,rating,ratingCount}=props;
    let keys=Object.keys(option).forEach((key)=>{
        return (<option value={key}>{key}</option>)
    });
    const [opti,setOpti]=useState("");
    useEffect(()=>{

    })

    return (<div>
            <div>
                {option[opti].discount}
            </div>
            <div>
                <img src={option[opti].image} alt="image" />
            </div>
            <div>
                <p>{category}</p>
                <p>{name}</p>
            </div>
            <div>
                {rating} {ratingCount}
            </div>
            <select onChange={changeopt} id='opt'>
                {keys}
            </select>
            <div>
                <p><del>Rs{option[opti].price}</del> Rs {option[opti]['dis-price']}</p>
                <p>Standarad Delivery: Today 9:00 AM - 11:00 AM</p>
                <button disabled>Qty</button><input /><button>Add</button>
            </div>
    </div>);
}