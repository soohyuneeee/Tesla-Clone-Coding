import React from "react";
import styled from 'styled-components';
function Footer(){
    return(
    <footer>
        <Big>
        <nav>
            <a href="d" >Tesla © 2022</a>
            <a href="d" >개인정보 처리방침 및 법적고지</a>
            <a href="d" >이용 약관</a>
            <a href="d" >문의하기</a>
            <a href="d" >채용정보</a>
            <a href="d" >새 소식</a>
            <a href="d" >위치</a>
        </nav>
        </Big>
        <Small>
        <p>
        <span>테슬라코리아 유한회사 | 사업자등록번호 : 524-88-00237 | 데이비드존파인스타인, 리리 | 통신판매업신고: 제2016-서울강</span><br/>
        <span>남-02964호|</span>
        <a href="d" >사업자정호확인</a>
        <span> | 호스팅제공자: Tesla Inc. | 주소 : 서울특별시 강남구 테헤란로 134, 14층 | 대표전화 : 080-</span><br/>
        <span>617-1388 | </span>
        <a href="southkorea@tesla.com" >southkorea@tesla.com</a>
        </p>

        </Small>
        </footer>
    
    );
}
export default Footer;
const Big = styled.div`
a{
    font-size:12px;
    padding: 10px;
    line-height: 50px;
    color:white;
    text-decoration-line:none;
    
}
padding:0px;
background-color:black;
margin:0px;
text-align:center;
`

const Small = styled.div`
background-color:black;
p{
    margin:0px 0px;
    text-align:center;
    color:white;
    font-size:5px;
    line-height: 20px;
    a{
        color:white;
    }
    
}

`

