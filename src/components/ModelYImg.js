import React from "react";

export default function ModelYImg(props){

    console.log(props.carimg);

    let carImg = `../images/${props.carimg}.png`

    return(
        <div className="img--div">
            <img src={carImg}  alt="차 사진"></img>
        </div>
    )
}