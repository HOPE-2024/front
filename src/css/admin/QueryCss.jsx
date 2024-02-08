import styled from "styled-components";

export const QueryCss = styled.div`
  width: 100%;
  max-width: 1280px;
    margin: 0 auto;
  height: 80%;
  margin-top: 50px;
  background: white;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px; /* 세로 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0); /* 스크롤바 색상 */
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0); /* 스크롤바 색상 */
  }
  .content1 {
    width: 100%;
    height: 50px;
    p {
      color: #adadad; 
      margin-left: 190px;
      line-height: -10px;
      font-size: 1.7em;
    }
  }

  .content2 {
    width: 70%;
    margin: 0 auto;
    height: 40px;
    display: flex;
    z-index: 33;
    position: relative;
    &:hover > select{
      border: 2px #023b96 solid;
    }
    &:hover >  input{
      border: 2px #023b96 solid;
    }
    }
    .a{
      margin-top: 20px;
    }
    .b{
      margin-top: 20px;
      input{
        padding-left: 10px;
      }
    }
    .c{
      width: 300px;
      height: 40px;
      padding-left: 10px;
    }
    input {  
      width: 100%; 
       border: 2px #adadad solid;    
    }
    
    ::placeholder {
  color: #adadad ;
    }
    .text {
      margin-right: 10px;
      width: 200px;
      height: auto;  
    }

    .type {
      height: auto;
      font-size: 20px;
   

      &:hover {
        ul {
          margin-top: -1px;
          width: 100%;
          display: block;
          border: 1px solid #ff0000;
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
 
        }
      }
    }
  

  .content3 {
  
    width: 70%;
    height: 350px;
    display: flex;
    margin: 0 auto;
    margin-top: 25px;
    .text {
      margin-right: 0px;
      width: 200px;

      height: auto;
      p {
        line-height: 50px;
        font-size: 1.3em;
        display: flex;
        justify-content: end;
        width: 200px;
      }
    }
    .textBox {
      width: 100%;
      height: auto;
      margin-left: 10px;
      margin: 0;
    } &:hover textarea {
      border: 3px #023b96 solid;
    }
  }

  .content4 {
    margin-top: 50px;
    width: 100%;
    height: auto;
    display: flex;  
 
    .filebox {
      margin-top: 15px;
      height: auto; 
      button{
        margin-left: 190px;
        width: 100px;
        height: 35px;
        background:white  ; 
        color: #adadad; 
        border: 2px #adadad solid;
      }  
      img {
        margin-left: 190px;
        width: 100px;
        height: 100px;
      }
    } :hover > button{
      border: 2px #023b96 solid;
    }

  }
  .content5 {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    button {
      margin: 0 50px;
    }
  }
`;
export const InputBox = styled.textarea`
  width: 100%;
  border: 2px #adadad solid;
  padding: 10px;
  font-size: 1.1em;
  height: 100%;
`;
export const Select = styled.select`
  border: 2px #adadad solid;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  margin: 0px;
  text-align: center;
  font-size: 1rem;

color: #adadad;

`;
