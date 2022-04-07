import React from "react";
import data from "../Data/data";
import Recent from "./recentBox";

export default function RecentParent(){

    let [allData,setData]=React.useState(data);
    let filter=allData.filter(da=>da.recent);
    let result=filter.map(da => {
        if(da.recent){
            return(
                <Recent
                key={da.id}
                {...da}
                />
            )
        }
    })
    return(
            <div className="recent-parent">
                <h3 className="fs-5">recent posts</h3>
                <div className="recent-content">
                    {result}
                </div>
            </div>
    )
}