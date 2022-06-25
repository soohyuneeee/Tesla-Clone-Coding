import React from 'react';
import './section.css';
import styled from 'styled-components';
import {Fade} from "react-reveal";

function Section (
    {
        title,
        description,
        leftBtnText,
        rightBtnText,
        backgroundImg,
    }
){
    return( 
    <Wrap bgImange={backgroundImg}>
      <div className='Fade'>
        <div className='ItemText'>
            <h1>{title}</h1>
            <a href="dd" class="application-link">{description}</a>
        </div>
        </div>
        <div className='Buttons'>
          <div className='Fade'>
        <div className='ButtonGroup'>
            <div className='LeftButton'>{leftBtnText}</div>
            {rightBtnText&&<div className='RightButton'>{rightBtnText}</div>}
        </div>
        </div>

        <img className='DownArrow' src="/images/down-arrow.png"/>
        </div>

    </Wrap>
    );
    
}
export default Section;
const Wrap =styled.div`
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image:${(props) => `url("/images/${props.bgImange}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    object-fit:cover;
    * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
`;