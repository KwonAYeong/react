import React from 'react';
import MyComponent from './MyComponent';
import YourComponent from './YourComponent';
import Say from './Say';

function App() {
  return (
    <>
      {/* property 명은 자유롭게 지정해주면 된다.
          다만 받는 쪽에서도 전달해줄 때 사용해준 명칭을 사용해야 연결된다. */}
      <MyComponent name="네이버 클라우드"> 사이에 작성한 내용 </MyComponent>
      {/* YourComponent 에 country 라는 명칭으로 나라이름을 넣어서 전달해주시고
      YourComponent.js 에서 DIV 태그 사이에 실제로 출력해보세요. */}
      <YourComponent country="한국" />

      <Say msg= "안녕하세요" />
    </>

    
    
     
  );
}

export default App;
