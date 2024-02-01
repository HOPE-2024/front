
import styled from "styled-components"

export const QueryCss = styled.div`
  width: 70vw;
  margin: 0;
  height: 80%;
  margin-top: 50px;
  background: white;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px; /* 세로 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0); /* 스크롤바 색상 */
  }

  &::-webkit-scrollbar-track { 
     background-color: rgba(0,0,0,0); /* 스크롤바 색상 */
  }
  .content1 {
    border-bottom: 2px solid black;
    width: 100%;
    height: 50px;
    p {
      line-height: -10px;
      font-size: 1.7em;
    }
  }

  .content2 {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 33;
    position: relative;
    p {
      line-height: 50px;
      font-size: 1.3em;
      margin-left: 50px;
    }

    .text {
      width: 170px;
      height: auto;
    }

    .type {
      width: 250px;
      height: auto;
      border: 1px solid black;

      &:hover {
        
        ul {
          margin-top: -1px;
          width: 100%;
          display: block;
      
          border-top: none;
          background: white;
        }
      }
      ul {
       padding-top: 10px;
        width: 100%;
        display: none;
      }

      li { 
        height: 30px;
        line-height: 30px;
        width: 100%;
        margin: 0 auto;
        
        p {
          line-height: 25px;
          padding: 0;
        }
      }
    }
  }

  .content3 {
    margin-top: 10px;
    width: 80%;
    height: 350px;
    display: flex;    
    p {
      line-height: 50px;
      font-size: 1.3em;
      margin-left: 50px;
    }
    .text {
      width: 200px;
      height: auto;
    }
    .textBox{
    width: 100%;
    height: auto;
    }
  }

  .content4 {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    p {
      line-height: 50px;
      font-size: 1.3em;
      margin-left: 27px;
    }
    .text {
      width: 200px;
      height: auto;
    }
    .filebox{
      margin-top: 15px;
    }
  }
  .content5 {
    margin-top: 50px;
    width: 100%;
    height: 50px;
display: flex;
justify-content: center;

    button{
      margin: 0 50px;
    }
  }
`;
export const InputBox = styled.textarea`
      width: 100%;
    height: 100%;
`;
