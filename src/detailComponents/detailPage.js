import React from "react"
import { useParams } from "react-router"
import data from "../Data/data";
import Recent from "../components/recentBox";
import { faCalendarDay,faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Categories from "../components/categories";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
export default function DetailPage(){
    
    let {id}=useParams();
    let selectedData=data.filter(da=>da.id=== parseInt(id));
    let pargraphs=selectedData[0].desc.map((de,index)=>{
        return(
            <p key={index}>{de}</p>
        )
    })

    let type=selectedData[0].type;
    let result=data.filter(da=> da.type===type && da.id !==parseInt(id)).map(da=> {
        return(
            <Recent {...da} key={da.id}/>
        )
    })

    let filterData=data.filter(da=>da.id!==parseInt(id));
        let partData;
        let random=Math.floor(Math.random()*filterData.length);
        partData=filterData[random];
        


    return(
        <div className="flex-home">
            <div className="page-news">
                <div className="selected-box p-4">
                    <img alt="" src={selectedData[0].img}/>
                    <div className="date">
                        <FontAwesomeIcon icon={faCalendarDay} className="icon"/>
                        <span>{selectedData[0].date}</span>
                    </div>
                    <h3>{selectedData[0].title}</h3>
                    {pargraphs}
                </div>
                <div className="random-box" style={{backgroundImage:`url(${partData.img})`}}>
                        <div className="text-randomBox">
                            <span>{partData.date}</span>
                            <h4 className="fs-2">{partData.title}</h4>
                        </div>
                        <Link to={`/detail/${partData.id}`}><FontAwesomeIcon icon={faArrowRightLong} className="arrow"/></Link>
                </div>
            </div>
            <div className="static-parent">
            <div className="recent-parent">
                <h3 className="fs-5">related posts</h3>
                <div className="recent-content">
                    {result}
                </div>
            </div>
                <Categories/>
            </div>
        </div>
    )
}