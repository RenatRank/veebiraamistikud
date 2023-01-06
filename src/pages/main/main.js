import Header from "../../components/header/header";
import RightBar from "../../components/rightBar/rightBar";
import LeftBar from "../../components/leftBar/leftBar";
import Feed from "../../components/feed/feed";
import "./main.css";
import React from "react";

export default function Main() {
    return (
        <div>
            <Header/>

            <div className="mainContainer">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </div>


        </div>
    )
}