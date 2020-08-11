import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata";

function netflixCard(value){
    return(
        <Card
        key={value.id}
        imgsrc={value.imgsrc}
        title={value.title}
        sname={value.sname}
        link={value.link}
    />
    );
}

ReactDOM.render(
    <>
    <h1 className="heading_Style">Top rated Webseries on Netflix</h1>
    {Sdata.map(netflixCard)}
    </>
    ,
    document.getElementById("root")
    );