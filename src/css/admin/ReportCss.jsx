import styled from "styled-components";

export const MemberListCss = styled.div`
display: flex;

min-height: 300px;
flex-direction: row;
max-width: 1280px;
margin: 0 auto;
margin-top: 50px;
background:#ffffff;     
 /* 왼쪽 메뉴 CSS */
  .left{
    min-width: 150px;
    height:auto;
    min-height: 100vh;
    background:#3C84F8;     
    font-size: 1.5em;
    ul{
      margin-top: 50px;    
    }
    li{
      margin: 10px;  
      color: #a69d9d;
      background: white;
      border-radius: 10px;
      padding: 10px;
    }
    .active {
      color: #023382;
    }   
    .font{
      display: flex;
      justify-content: center;
     width: 60%;
      font-size: .5em;

    }
  }

  /* 오른쪽 리스트 CSS */
  .right{
    width: 100%;  
    height: 100%;
    .search{
      float: right;
    }   
     
      .list1{
        margin-top: 50px;   
        ul{
          display: flex;
            flex-direction: row;
            width: 90%;
            margin: 0 auto;
          .fontA{
            width: 12.5%;
  height: auto;
  display: flex;
  flex-direction: column; /* 세로 방향으로 아이템을 배치합니다. */
  flex-wrap: wrap; /* 요소들이 부모 요소를 벗어나면 여러 줄에 걸쳐 표시됩니다. */
  margin: 0;
  padding: 0;
          }
          .fontB{
            width: 25%;
  height: auto;
  display: flex;
  flex-direction: column; /* 세로 방향으로 아이템을 배치합니다. */
  flex-wrap: wrap; /* 요소들이 부모 요소를 벗어나면 여러 줄에 걸쳐 표시됩니다. */
  margin: 0;
  padding: 0;      
          }
          li{
            width: 100%;
            display: flex;
            justify-content : center ;
            align-items: center;
       
            border: 1px solid #ffffff;
            border-radius: 5px;
            height: auto;           
            min-height: 30px;
          }
        }
   
    }
    .backA{
    
      li{  color:white;
        background:#3C84F8;      
      }
    }  
    .memberA{
      margin: 0;
      .query{
        li{
          list-style: none;
          background: white;
        }         
        }
      li{
        background: #d6d6d6;  
      }
    }
     .memberB{
      margin: 0;
      .query{
        li{
          list-style: none;
          background: white;
        }         
        }
      li{
        background:#3C84F8;      
      }
    }
  }
  .qureyList{
    margin-top: -50px;
  }
`;