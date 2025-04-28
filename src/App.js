/**
 * 
 * export: 외부에서 접근 가능
 * default: 코드를 사용하는 다른 파일에서 이 함수가 주요 함수임을 알림
 */
export default function Board() {
  return (
  <>
  <div className="board-row">
   <Square value="1"/>
   <Square value="2"/>
   <Square value="3"/>
  </div>
  <div className="board-row">
   <Square value="4"/>
   <Square value="5"/>
   <Square value="6"/>
  </div>
  <div className="board-row">
   <Square value="7"/>
   <Square value="8"/>
   <Square value="9"/>
  </div>
  </>
  );
}

function Square({value}) {
  return <button className="square">{value}</button>
}
