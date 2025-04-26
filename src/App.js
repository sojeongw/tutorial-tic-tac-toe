/**
 * 
 * export: 외부에서 접근 가능
 * default: 코드를 사용하는 다른 파일에서 이 함수가 주요 함수임을 알림
 */
export default function Board() {
  return (
  <>
  <div className="board-row">
   <button className="square">1</button>
   <button className="square">2</button>
   <button className="square">3</button>
  </div>
  <div className="board-row">
   <button className="square">4</button>
   <button className="square">5</button>
   <button className="square">6</button>
  </div>
  <div className="board-row">
   <button className="square">7</button>
   <button className="square">8</button>
   <button className="square">9</button>
  </div>
  </>
  );
}
