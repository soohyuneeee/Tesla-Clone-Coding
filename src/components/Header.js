import React from 'react';
import './header.css';

function Header() {
    return (
        <header>
            <div className='container'>
                <section className='top'>
                    <a href="/ko_kr/impact" class="tds-link">Tesla 2021 영향보고서 읽기</a>
                </section>
                {/* <div className='logo' /> */}
                <nav>
                  <img src='images/tesla.png' alt="asdfsadfd" className='teslaimg'/>
                    <ol className='title'>
                        <li><a href='/'>Model S</a></li>
                        <li><a href='/'>Model 3</a></li>
                        <li><a href='/'>Model X</a></li>
                        <li><a href='/'>Model Y</a></li>
                        <li><a href='/'>Cybertruck</a></li>
                        <li><a href='/'>Powerwall</a></li>


                    </ol>
                </nav>
            </div>
        </header>
    );
}
export default Header;
