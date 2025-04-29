import { useState } from 'react';

/**
 * 
 * export: 외부에서 접근 가능
 * default: 코드를 사용하는 다른 파일에서 이 함수가 주요 함수임을 알림
 */
export default function Board() {
  return (
  <>
  <div className="board-row">
   <Square/>
   <Square/>
   <Square/>
  </div>
  <div className="board-row">
   <Square/>
   <Square/>
   <Square/>
  </div>
  <div className="board-row">
   <Square/>
   <Square/>
   <Square/>
  </div>
  </>
  );
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  return (<button className="square" onClick={handleClick}>{value}</button>);
}
