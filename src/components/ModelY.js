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


    const [borderBlack, setBorderBlack] = useState('3px solid #3457b1');
    const [borderWhite, setBorderWhite] = useState('0px solid');

    const [interiorName, setInteriorName] = useState('All Black');
    const [interiorPrice, setInteriorPrice] = useState('포함');

    const [interior, setInterior] = useState('black');

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

    function setInteriorBtn(interiorColor) {
        if (interiorColor === 'black') {
            setInteriorName('All Black');
            setInteriorPrice('포함');
            setBorderBlack("3px solid #3457b1");
            setBorderWhite("0px solid");
            setInterior("black");
        }
        else {
            setInteriorName('Black & White');
            setInteriorPrice('₩1,286,000');
            setBorderBlack("0px solid");
            setBorderWhite("3px solid #3457b1");
            setInterior("white");
        }
    }

    return (
        <div>
            <OrderHeader />
            <div className="content">
                <ModelYImg form={isPer} color={color} wheel={wheel} interior={interior} />
                <main className="car--content">
                    <h1 className="car--name"><b>Model Y</b></h1>
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
                        <div className="info--div">
                            <span className="color--name">{colorName}</span><span className="color--price">{colorPrice}</span>
                        </div>
                    </div>
                    <div className="wheel">
                        <h4 className="detail--title">휠</h4>
                        {
                            isPer ? <div className="wheel--btn--div">
                                <button className="wheel--btn" id="setWheelInfo19" style={{ border: border19 }} onClick={set19}>
                                    <img src="../images/19.png" className="wheel--img" alt="바퀴사진" />
                                </button>
                                <button className="wheel--btn" id="setWheelInfo20" style={{ border: border20 }} onClick={set20}>
                                    <img src="../images/20.png" className="wheel--img" alt="바퀴사진" />
                                </button>
                            </div> :
                                <div className="wheel--btn--div">
                                    <button className="wheel--btn" style={{ border: '3px solid #3457b1' }}><img src="../images/21.png" className="color--img" alt="바퀴사진" /></button>
                                </div>
                        }
                        <div className="info--div">
                            <span className="wheel--name">{wheelName}</span><span className="wheel--price">{wheelPrice}</span>
                        </div>
                    </div>
                    <div className="interior">
                        <h4 className="detail--title">인테리어</h4>
                        <div className="interior--btn--div">
                            <button className="interior--btn" style={{ border: borderBlack }} onClick={() => setInteriorBtn('black')}>
                                <img src="../images/interior_black.png" className="interior--img" alt="인테리어사진" />
                            </button>
                            <button className="interior--btn" style={{ border: borderWhite }} onClick={() => setInteriorBtn('white')}>
                                <img src="../images/interior_white.png" className="interior--img" alt="인테리어사진" />
                            </button>
                        </div>

                        <div className="info--div">
                            <span className="interior--name">{interiorName}</span><span className="interior--price">{interiorPrice}</span>

                        </div><h6 className="interior--subtitle">시트 구성</h6>
                        <div className="wheel--btn--div">
                            <button className="interior--btn" style={{ border: '3px solid #3457b1' }}><span className="interior--img">5</span></button>
                        </div>

                        <div className="info--div">
                            <span className="interior--name">5인승</span><span className="interior--price">포함</span>
                        </div>
                        <ul className="interior--ul">
                            <li className="interior--li">등받이 조절 가능한 2열 좌석</li>
                            <li className="interior--li">최대 수납을 위한 완전 접이식 2열 좌석</li>
                            <li className="interior--li">트렁크 내부에 위치한 전동식 좌석 폴딩 버튼</li>
                        </ul>
                        <button className="char">특징</button>
                    </div>
                    <div className="interior">
                        <h4 className="performance--h2">향상된 프로파일럿</h4>
                        <span className="performance--subtitle">₩4,522,000</span>
                        <ul>
                            <li className="performance--li">내비게이트 온 오토파일럿</li>
                            <li className="performance--li">자동 차선 변경</li>
                            <li className="performance--li">자동 주차</li>
                            <li className="performance--li">차량 호출</li>
                            <li className="performance--li">스마트 차량 호출</li>
                        </ul>
                        <span className="button--span">
                            <button className="add">추가하기</button>
                            <button className="char">특징</button>
                        </span>
                    </div>
                    <div className="interior">
                        <h4 className="performance--h2">풀 셀프 드라이빙 구현 기능</h4>
                        <span className="performance--subtitle">₩9,043,000</span>
                        <ul>
                            <li className="performance--li">오토파일럿 및 향상된 오토파일럿의 모든 기능</li>

                        </ul>
                        <span className="realize">출시 예정:</span>
                        <ul>
                            <li className="performance--li">교통 신호등 및 정지 표지판 제어</li>
                            <li className="performance--li">시내에서 자동 주행</li>
                        </ul>
                        <span className="button--span">
                            <button className="add">추가하기</button>
                            <button className="char">특징</button>
                        </span>
                        <span className="info--span">
                            현재 사용가능한 기능들은 운전자의 적극적인 주의가 필요하고 운전자에게 책임이 주어집니다. 현재 차량이 자율적으로 주행하는 것이 아닙니다. 이러한 기능들이 상용화되기 위해서는 수십억 마일의 주행 테스트를 통해 차량의 자율 주행 능력이 운전자의 주행 능력보다 크게 앞선다는 사실이 검증이 되어야 하며, 일부 관할권에서는 규제 승인이 더 오래 걸릴 수 있습니다. 셀프 드라이빙 기능이 진화함에 따라 차량도 OTA 소프트웨어 업데이트를 통해 지속적으로 업그레이드됩니다.
                        </span>
                    </div>
                    <div className="payment">
                        <h4 className="performance--h2"><b>Model Y</b> 주문하기</h4>
                        <button className="payment--btn">결제 계속하기</button>
                        <span className="info--span">
                            테슬라코리아 유한회사 | 사업자등록번호 : 524-88-00237 | 데이비드존파인스타인, 리리 | 통신판매업신고: 제2016-서울강남-02964호 | 사업자정보확인 | 호스팅제공자: Tesla Inc. | 주소 : 서울특별시 강남구 테헤란로 134, 14층 | 대표전화 : 080-617-1388 | <u>southkorea@tesla.com</u>
                        </span>
                    </div>
                </main>
            </div>
        </div>
    )
}