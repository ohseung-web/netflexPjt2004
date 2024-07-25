import React from 'react';
import { useState } from 'react';
import Data from '../components/Data';

export default function Test() {
  let [movieData] = useState(Data);
  return (
    <div
      style={{
        margin: '20px auto',
        width: '1200px',
        display: 'flex',
        justifyContent: 'left',
        gap: '10px',
        flexFlow: 'row wrap',
      }}
    >
      {movieData.map((data, i) => {
        return (
          <div className="img">
            <img src={data.poster} />
            <p style={{ textAlign: 'center' }}>{data.title}</p>
          </div>
        );
      })}
    </div>
  );
}
