import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function NewsBox(props){
    return(
        <div className="news-box p-4">
            <img alt="" src={props.img}/>
            <h3>{props.title}</h3>
            <div className="box-icons">
                <FontAwesomeIcon icon={faCalendarMinus} className="icon"/>
                <span>{props.date}</span>
            </div>
            <p>{props.text}</p>
            <Link to={`/detail/${props.id}`}>continue reading</Link>
        </div>
    )
}