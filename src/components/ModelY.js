import React, { useEffect, useState } from "react";
import ModelYImg from "./ModelYImg";
// import Wheel from "./Wheel";
import PerformUpgradeCom from "./PerformUpgradeCom";
import OrderHeader from "./OrderHeader";

export default function ModelY() {
    const [distance, setDistance] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [speedPerHour, setSpeedPerHour] = useState(0);
    const [isPer, setIsPer] = useState(false);
    const [colorName, setColorName] = useState('');
    const [colorPrice, setColorPrice] = useState('');
    const [color, setColor] = useState('white');

    const [wheelName, setWheelName] = useState('19인치 제미니 휠');
    const [wheelPrice, setWheelPrice] = useState('포함');
    const [newWheelName, setNewWheelName] = useState('19인치 제미니 휠');
    const [wheel, setWheel] = useState('');

    const [border19, setBorder19] = useState('3px solid #3457b1');
    const [border20, setBorder20] = useState('0px solid');
    
    useEffect(() => {
        setDistance(511);
        setSpeed(217);
        setSpeedPerHour(5.0);
        setIsPer(true);
        setColorName('Pearl White Multi-Coat');
        setColorPrice('포함');
        setColor('white');
    }, [])

    const setOption1 = () => {
        setDistance(511);
        setSpeed(217);
        setSpeedPerHour(5.0);
        setIsPer(true);
        newWheelName === '19인치 제미니 휠' ? set19() : set20();
    }

    const setOption2 = () => {
        setDistance(448);
        setSpeed(250);
        setSpeedPerHour(3.7);
        setIsPer(false);
        setNewWheelName(wheelName);
        setWheelName('21인치 Überturbine 휠');
        setWheelPrice('포함');
        setWheel('');
    }

    // const carImgName = (newColor) => {
    //     if (isPer) {
    //         setCarImg('basic');
    //     }
    //     else {
    //         setCarImg('perform');
    //     }
    //     setCarImg(prev => prev += '--' + newColor);
    // }

    
    function set19() {
        if (wheelName === '19인치 제미니 휠') return;
        setWheelName('19인치 제미니 휠');
        setWheelPrice('포함');
        setBorder19("3px solid #3457b1");
        setBorder20("0px solid");
        setWheel('');
    }

    function set20() {
        if (wheelName === '20인치 인덕션 휠') return;
        setWheelName('20인치 인덕션 휠');
        setWheelPrice('₩2,571,000');
        setBorder20("3px solid #3457b1");
        setBorder19("0px solid");
        setWheel('--20');
    }

    return (
        <div>
            <OrderHeader />
            <div className="content">
                <ModelYImg form={isPer} color={color} wheel={wheel}/>
                <main className="car--content">
                    <h1 className="car--name">Model Y</h1>
                    <div className="main">
                        <ul className="car--info--ul">
                            <li className="car--info"><span className="car--info--num">{distance}</span><span className="car--info--unit">km</span><br /><span className="car--info--text">주행 가능 거리</span></li>
                            <li className="car--info"><span className="car--info--num">{speed}</span><span className="car--info--unit">km/h</span><br /><span className="car--info--text">최고 속도</span></li>
                            <li className="car--info"><span className="car--info--num">{speedPerHour}</span><span className="car--info--unit">초</span><br /><span className="car--info--text">0-100 km/h</span></li>
                        </ul>
                        <span>듀얼 모터 상시 사륜구동(AWD)</span>
                        <button className="price--button" onClick={setOption1} style={!isPer ? { border: '2px solid gray' } : { border: '2px solid #3457b1' }}>
                            <span className="price--button--name">Model Y Long Range</span>
                            <span className="price--button--price">₩89,490,000</span>
                        </button>
                        <button className="price--button" onClick={setOption2} style={isPer ? { border: '2px solid gray' } : { border: '2px solid #3457b1' }}>
                            <span className="price--button--name">Model Y Performance</span>
                            <span className="price--button--price">₩96,190,000</span>
                        </button>
                        <button className="char">특징</button>
                    </div>

                    <div className="performance">
                        <PerformUpgradeCom isPer={isPer} />
                    </div>

                    <div className="color">
                        <h4 className="detail--title">색상</h4>
                        <div className="color--btn--div">
                            <button className="color--btn" style={color === 'white' ? { border: '3px solid #3457b1' } : { border: '0px solid' }} onClick={() => {
                                setColorName('Pearl White Multi-Coat');
                                setColorPrice('포함');
                                setColor('white');
                            }
                            }><img src="../images/Paint_White.png" alt="white" className="color--img"></img></button>
                            <button className="color--btn" style={color === 'black' ? { border: '3px solid #3457b1' } : { border: '0px solid' }} onClick={() => {
                                setColorName('Solid Black');
                                setColorPrice('₩1,286,000');
                                setColor('black');
                            }}><img src="../images/Paint_Black.png" alt="black" className="color--img"></img></button>
                            <button className="color--btn" style={color === 'midnightsilver' ? { border: '3px solid #3457b1' } : { border: '0px solid' }} onClick={() => {
                                setColorName('Midnight Silver Metallic');
                                setColorPrice('₩1,286,000');
                                setColor('midnightsilver');
                            }}><img src="../images/Paint_MidnightSilver.png" alt="midnightsilver" className="color--img"></img></button>
                            <button className="color--btn" style={color === 'blue' ? { border: '3px solid #3457b1' } : { border: '0px solid' }} onClick={() => {
                                setColorName('Deep Blue Metallic');
                                setColorPrice('₩1,286,000');
                                setColor('blue');
                            }}><img src="../images/Paint_Blue.png" alt="blue" className="color--img"></img></button>
                            <button className="color--btn" style={color === 'red' ? { border: '3px solid #3457b1' } : { border: '0px solid' }} onClick={() => {
                                setColorName('Red Multi-Coat');
                                setColorPrice('₩2,571,000');
                                setColor('red');
                            }}><img src="../images/Paint_Red.png" alt="red" className="color--img"></img></button>
                        </div>
                        <span className="color--name">{colorName}</span><span className="color--price">{colorPrice}</span>
                    </div>
                    <div className="wheel--div">
                        <div className="color">
                            <h4 className="detail--title">휠</h4>
                            {
                                isPer ? <div id="wheelBtn">
                                    <button className="color--btn" id="setWheelInfo19" style={{ border: border19 }} onClick={set19}>
                                        <img src="../images/19.png" className="color--img" alt="바퀴사진" />
                                    </button>
                                    <button className="color--btn" id="setWheelInfo20" style={{ border: border20 }} onClick={set20}>
                                        <img src="../images/20.png" className="color--img" alt="바퀴사진" />
                                    </button>
                                </div> :
                                    <div id="wheelBtn">
                                        <button className="color--btn" style={{ border: '3px solid #3457b1' }}><img src="../images/21.png" className="color--img" alt="바퀴사진" /></button>
                                    </div>
                            }
                            <span className="color--name">{wheelName}</span><span className="color--price">{wheelPrice}</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}