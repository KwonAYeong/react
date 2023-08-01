import React, { useState } from "react";

const ArrayChange = () => {
    // 사람 이름과 성적을 키-벨류 쌍으로 집어넣는 객체 초기값으로 넣기.
    const [humans, setHumans] = useState({kim:100, lee:200});

    const addScoreEvent = () => {
        // setHumans 를 이용해서 park 이라는 사람의 성적을 추가하려면?
        // humans.park = 300;  // 1. humans 에 park:300 을 추가힌디. (-> 화면에 반영 안됨.)
        // setHumans(humans)   // 2. setHumans 로 추가된 걸 화면에 반영
        console.log(humans);
        // 기본 humans 내부 요소 + park:300 추가.
        setHumans({...humans, park:300, kim:1000});

    }

    return (
        <>
            <button onClick={addScoreEvent}>성적 추가하기</button>
            <div>성적 목록: {humans.park}</div>
        </>

    );
}

export default ArrayChange;