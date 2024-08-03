import React from 'react';
import logo from '../img/logo.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="left_box">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="netflex" />
          </a>
        </div>
        <navi>
          <ul className="movie_list">
            <li>
              <Link to={'/'}>홈</Link>
            </li>
            <li>
              <Link to={`MovieType/${1}`}>로맨스</Link>
            </li>
            <li>
              <Link to={`MovieType/${2}`}>코미디</Link>
            </li>
            <li>
              <Link to={`MovieType/${3}`}>호러</Link>
            </li>
            <li>
              <a href="#">내가 찜한리스트</a>
            </li>
          </ul>
        </navi>
      </div>
      <div className="right_box"></div>
    </header>
  );
}
