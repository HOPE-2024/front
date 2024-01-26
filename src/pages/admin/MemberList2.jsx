import { useState } from "react";
import styled from "styled-components"

const Css = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid red;
  ul{
    width: 50%;
    height: 10%;
    display: flex;
    border: 3px solid gray;
    flex-direction: column;
  li{
    background: red;
  }
  }
`
export const MemberList2 = () => {
  const [a, setA] = useState('');
  const data = [{ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }]
  return (
    <Css>
      {data.map((item, index) => (
        <ul onClick={() => { setA(index) }} key={index}>
          {/* 여기에 데이터를 활용한 JSX를 작성하세요 */}
          <>
            <li>{item.a}</li>

            {a === index && <li>{item.b}</li>}
            <li>{item.c}</li>
          </>
        </ul>
      ))}

    </Css>
  )
}