import React, { useState } from "react";

const Say = (props) => {  // props 대신 {프로퍼티명1, 프로퍼티명2...} 로 전달 가능
    // 아래 문법을 통해서, 변수값이 변경될 때 화면도 다시 렌더링 할 수 있다.
    // const [관리 할 변수명, set관리할 변수명] = useState(초기값);
    // msg 를 기준으로 해보면
    const [msg, setMsg] = useState(props.msg);

    // 아래 함수가 실행되면 msg 변수에 든 값을 싸와디크랍으로 바꾼다.
    const onClickEvent = () => {
        setMsg('싸왓디크랍'); // msg 변수의 값을 싸왓디크랍으로 변경하고 다시 렌더링해라.
    }

    return (
        <div>
            {/* 이벤트 바인딩 할 때는 카멜캐이스로 변형해서 한다.
                 on이벤트명={위에서 선언한 함수} */}
            <button onClick={onClickEvent}>변경</button>
            <div> 인사하겠습니다 : {msg} </div>
        </div>
        
        
    )

}

export default Say;