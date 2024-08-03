import React from 'react';
import '../styles/Section.css';
import { useState } from 'react';
import Data from '../components/Data';

export default function Section() {
  let [movieData, setMovieData] = useState(Data);

  const cate = [
    { category: 1, cateName: '로맨스' },
    { category: 2, cateName: '코미디' },
    { category: 3, cateName: '호러' },
  ];
  // const TypeHandler = (movieData) => {
  //   let type = '';
  //   if (movieData.category == 1) {
  //     type = '로맨스';
  //   } else if (movieData.category == 2) {
  //     type = '코미디';
  //   } else {
  //     type = '호러';
  //   }
  //   setMovieData(type);
  //   console.log(type);
  // };
  return (
    <div className="movieWrap">
      {cate
        // .filter((cate) => cate.category == parseInt(movieData.category))
        .map((cate, i) => {
          return (
            <div key={i} className="cataName">
              {cate.cateName}
            </div>
          );
        })}
      <section>
        {movieData.map((data, i) => {
          return (
            <div key={data.id} className="movieItem">
              <img src={data.poster} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

// movie Card
// function MovieCard(props) {
//   return (
//     <div className="movieItem">
//       <img src={props.movieData.poster} />
//     </div>
//   );
// }
