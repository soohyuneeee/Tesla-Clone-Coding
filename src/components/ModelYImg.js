import {React, useState, useEffect} from "react";

export default function ModelYImg(props){
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    let form = props.form?'basic':'perform';
    let carImg = `../images/${form}--${props.color}${props.wheel}.png`

    return(
        <div className="img--div">
            {
                scrollPosition > 1000?
                    <video src="https://www.tesla.com/ns_videos/model3/autopilot/navigate-on-autopilot.mp4" className="img" autoPlay={true} muted={true} loop={true}></video>
                :
                    <img src={scrollPosition < 600 ? carImg : `../images/interior--car--${props.interior}.jpg`} alt="차 사진"></img>
            }
        </div>
    )
}