import React from "react";
import ModelYImg from "./ModelYImg";

export default function WheelPerform(props){

    return(
        <div className="color">
            <h4 className="detail--title">휠</h4>
            <div id="wheelBtn">
            <button class="color--btn" style={{border: '3px solid #3457b1'}}><img src="../images/21.png" class="color--img" alt="바퀴사진"/></button>
            </div>
            <span className="color--name">21인치 Überturbine 휠</span><span className="color--price">포함</span>
            <ModelYImg carimg={props.carImg} />
        </div>
    )
}