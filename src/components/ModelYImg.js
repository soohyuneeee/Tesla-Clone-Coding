import React from "react";

export default function ModelYImg(props){
    let form = props.form?'basic':'perform';
    console.log(form + '--' + props.color + props.wheel);
    let carImg = `../images/${form}--${props.color}${props.wheel}.png`

    return(
        <div className="img--div">
            <img src={carImg}  alt="차 사진"></img>
        </div>
    )
}