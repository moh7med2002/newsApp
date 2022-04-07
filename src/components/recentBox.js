import React from "react";
import {  useNavigate} from "react-router-dom";

export default function Recent(props){
    let navg=useNavigate();
    return(
        <div className="recent">
            <img alt="" src={props.img}/>
            <div className="text-recent">
                <h4>{props.date}</h4>
                <h5 className="fs-6" onClick={()=>navg(`/detail/${props.id}`)} style={{cursor:"pointer"}}>{props.title}</h5>
            </div>
        </div>
    )
}