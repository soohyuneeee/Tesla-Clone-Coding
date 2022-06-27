import React, { useState } from "react";

export default function WheelBasic(){

    const [wheelName, setWheelName] = useState('19인치 제미니 휠');
    const [wheelPrice, setWheelPrice] = useState('포함');

    
    const [border19, setBorder19] = useState('3px solid #3457b1');
    const [border20, setBorder20] = useState('0px solid');

    function set19(){
        setWheelName('19인치 제미니 휠');
        setWheelPrice('포함');
        setBorder19("3px solid #3457b1");
        setBorder20("0px solid");
    }
    
    function set20(){
        setWheelName('20인치 인덕션 휠');
        setWheelPrice('₩2,571,000');
        setBorder20("3px solid #3457b1");
        setBorder19("0px solid");
    }

    return(
        <div className="color">
            <h4 className="detail--title">휠</h4>
            <div id="wheelBtn">
                <button class="color--btn" id="setWheelInfo19" style={{border: border19}} onClick={set19}>
                    <img src="../images/19.png" className="color--img" alt="바퀴사진"/>
                    </button>
                <button class="color--btn" id="setWheelInfo20" style={{border: border20}} onClick={set20}>
                    <img src="../images/20.png" className="color--img" alt="바퀴사진"/>
                </button>
            </div>
            <span className="color--name">{wheelName}</span><span className="color--price">{wheelPrice}</span>
        </div>
    )
}