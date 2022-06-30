import {React, useState, useEffect} from "react";

export default function ModelYImg(props){
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    console.log(props.interior);

    let form = props.form?'basic':'perform';
    console.log(form + '--' + props.color + props.wheel);
    let carImg = `../images/${form}--${props.color}${props.wheel}.png`

    return(
        <div className="img--div">
            <img src={scrollPosition < 600 ? carImg : `../images/interior--car--${props.interior}.jpg`}  alt="차 사진"></img>
        </div>
    )
}