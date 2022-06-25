import React from 'react';
import styled from "styled-components"
import Section from "./Section";
import Footer from "./Footer";
function Home (){
    return (
    <Container>
        <Section
        title="Model Y"
        description="시승신청"
        backgroundImg="model-Y.jpg"
        leftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
        />
        <Section
        title="Model 3"
        description="시승신청"
        backgroundImg="model-3.jpg"
        leftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
        />
      
        <Section
        title="Model X"
        description="시승신청"
        backgroundImg="model-X.jpg"
        leftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
        />
          <Section
        title="Model S"
        description="시승신청"
        backgroundImg="model-S.jpg"
        leftBtnText="주문하기"
        rightBtnText="자세히 알아보기"
        />
         <Section
        title="태양광과 Powerwall"
        description="모든 전력을 공급"
        backgroundImg="home.jpg"
        leftBtnText="자세히 알아보기"
        
        />
        <Footer/>
        
        

    </Container>
    );
}
export default Home;
const Container = styled.div`
height:100vh;
`;