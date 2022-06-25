import React from 'react';
import styled from 'styled-components';
import './header.css';

function Header(){
    return (
        <header>
        <div className='container'>
            <section className='top'>
                <div className='logo'></div>
        <a href="/ko_kr/impact" class="tds-link">Tesla 2021 영향보고서 읽기</a>
        </section>
        </div>
            <nav className='Logo'>
                    <ol>
                    <li><a href='d'>Model S</a></li>
                    <li><a href='d'>Model 3</a></li>
                    <li><a href='d'>Model X</a></li>
                    <li><a href='d'>Model Y</a></li>
                    <li><a href='d'>Cibertruck</a></li>
                    <li><a href='d'>Powerwall</a></li>
                    </ol>
                
                <nav className='RightLogo'>
                    <ol>
                    <li><a href='d'>Shop</a></li>
                    <li><a href='d'>계정</a></li>
                    <li><a href='d'>모델</a></li>
                    </ol>
                </nav>
                </nav>
            
            </header>
            
            
        
        
    );
}
export default Header;
