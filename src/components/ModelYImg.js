import React from "react";

export default function ModelYMain(props){

    let carImg = `../images/${props.carimg}.png`

    return(
        <div className="img--div">
            <img src={carImg}  alt="차 사진"></img>
        </div>
    )
}

// ModelYMain.defaultProps = {
//     img: 'basic--car'
// };