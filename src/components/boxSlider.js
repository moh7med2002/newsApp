import React from "react";
import { useNavigate } from "react-router";
export default function BoxSlider(props){
    let navg=useNavigate();
    return(
        <div className="box-slider" style={{backgroundImage:`url(${props.img})`}} onClick={()=>navg(`/detail/${props.id}`)}>
            <div className="box-content">
                <span className="boxSlider-date">{props.date}</span>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}