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
                    <li><a href='/'>Model S</a></li>
                    <li><a href='/'>Model 3</a></li>
                    <li><a href='/'>Model X</a></li>
                    <li><a href='/'>Model Y</a></li>
                    <li><a href='/'>Cybertruck</a></li>
                    <li><a href='/'>Powerwall</a></li>
                    </ol>
                
                <nav className='RightLogo'>
                    <ol>
                    <li><a href='/'>Shop</a></li>
                    <li><a href='/'>계정</a></li>
                    <li><a href='/'>모델</a></li>
                    </ol>
                </nav>
                </nav>
            
            </header>
            
            
        
        
    );
}
export default Header;
