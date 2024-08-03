import React from 'react';
import '../styles/Section.css';
import { useState } from 'react';
import Data from '../components/Data';
import { Link } from 'react-router-dom';
// 파라미터 값 가저오는 훅
// 반드시 설치 : npm install react-router-dom
import { useParams } from 'react-router-dom';

export default function Section() {
  let [movieData] = useState(Data);
  let { id } = useParams();

  return (
    <div className="movieWrap">
      <section>
        {movieData
          .filter((item) => item.category == parseInt(id))
          .map((data, i) => {
            return (
              <div className="movieItem">
                <img src={data.poster} />
              </div>
            );
          })}
      </section>
    </div>
  );
}
