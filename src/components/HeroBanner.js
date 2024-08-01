import Data from '../components/Data'
import { useEffect, useState } from 'react'
import '../styles/HeroBanner.css'

export default function HeroBanner(){
    const [randomMovie, setRandomMovie] = useState(null);
    useEffect(()=>{
        //console.log(Data.length); //20
        const randomIndex = Math.floor(Math.random() * Data.length);
        console.log(randomIndex); //random 0 ~ 19
        setRandomMovie(Data[randomIndex])
    },[])

    // randomMovie가 null일 때는 아무것도 렌더링하지 않거나 로딩 메시지를 표시
    if(!randomMovie){
        return <div>Loading...</div>
    }

    return(<div className='heroBanner' style={{backgroundImage:`url(${randomMovie.poster})`}}>
        <div className="info">
            <h3>{randomMovie.title}</h3>
            {/* <p className="poster"><img src={randomMovie.poster} alt="" /></p> */}
            <p className="story">{randomMovie.story}</p>
            <div className="link">
                <a href="#" className='playBtn'>재생</a>
                <a href="#" className='detailInfo'>상세정보</a>
            </div>
        </div>
        <div className="movieAge">{randomMovie.age}</div>
    </div>)
}