import data from "../Data/data";
import RecentParent from "./recentBox";
import Categories from "./categories";
import NewsBox from "./newsBox";
import { useParams } from "react-router";

export default function Choosepage(){
    let {typeChoose}=useParams();
    let filterData= data.filter(da=>da.type===typeChoose);
    let newsArr=filterData.map(da=>{
        return(
            <NewsBox 
            key={da.id}
            {...da}
            />
        )
    })
    return(
        <div className="flex-home">
          <div className="page-news">
            {newsArr}
          </div>
          <div className="static-parent">
            <Categories/>
          </div>
      </div>
    )
}