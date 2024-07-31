import logo from '../img/logo.png'

export default function Header(){
    return (<header>
        <div className="left">
            <h1><a href="#"><img src={logo} alt="logo" /></a></h1>
            <nav>
                <a href="#">홈</a>
                <a href="#">시리즈</a>
                <a href="#">영화</a>
                <a href="#">NEW! 요즘 대세 콘텐츠</a>
                <a href="#">내가 찜한 리스트</a>
                <a href="#">언어별로 찾아보기</a>
            </nav>
        </div>
        <div className="right">
            <button type="button">검색</button>
            <button type="button">알림</button>
            <button type="button">마이페이지</button>
        </div>
    </header>)
}