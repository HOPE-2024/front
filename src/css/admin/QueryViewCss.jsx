import styled from "styled-components";

export const QueryViewCss = styled.div`
  width: 80%;
  max-width: 1280px;
    margin: 0 auto;
  height: 80%;
  background: white;
  margin-top: 40px;
 img{
  width: 300px;
  height: 300px;
 }
  .Viewa {
    width: 100%;
    margin: 0 ;
    height: 40px;
    display: flex;
    z-index: 33;   
    position: relative;     
    .inputA{
      width: 300px;
      height: 40px;
      padding-left: 10px;
    }
    .inputB{
      width: 100%;
      input{
        width: 100%;
      }
      height: 40px;
      padding-left: 10px;  
    }
    .type{
      width: 100%;
      background: red;
      margin-top: 10px; 
      input{
        width: 100%;
        height: 40px;
        padding-left: 10px;
      }
    }
  }
  .Viewb {
    width: 100%;
    margin-top: 20px ;
    height: auto;
    min-height: 500px;
    padding: 10px;  
border: 1px solid black;
  }
    .ViewC {
    width: 100%;
    height: 200px;
    display  : flex ;
    align-content: center;
    margin-top: 10px;
    div{ 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    img{
      width: 200px;
      height: 200px;
    }
    }



  }
  `;




