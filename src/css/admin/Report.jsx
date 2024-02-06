import styled from "styled-components";

export const MemberListCss = styled.div`
    width: 100%;
    max-width: 1280px;
    height: auto;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    @media (max-width: 768px) {            
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }
    .content1{
   width: 200px;
   height: auto;
   font-size: 20px;
   font-weight: lighter;
   margin-top: 40px;
   @media (max-width: 768px) {            
    
     display: flex;
     justify-content: center;
     align-items: center;
     ul{   
      padding-bottom: 20px;
      li{
        border: 1px solid #3C84F8;
       margin: 0;
       padding: 0;
      width: 140px;
     height:30px;
     display: flex;
    align-items: center;
    justify-content: center;

     }  
     .font{
    margin:0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
     }
 
  }
   li{
    margin: 10px;
      cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능한 상태로 표시 */
      color: black;    /* 기본 글씨 색상 */
      &:hover {
        text-decoration: underline; /* 마우스를 올렸을 때 밑줄 표시 */
      }
   }
   .font{
    font-size: 15px;
    margin-left: 35px;
   }
       .active {
      color: #023B96; /* active 클래스가 적용되면 글씨 색상을 빨간색으로 변경 */
    }   
 
    }
    .content2{
        height: auto;
         display: flex;
         flex-direction: column;
         width:  100%;
         flex-wrap: wrap;      
         @media (max-width: 768px) {   
     div{
      justify-content: center;
      align-items: center;
     }
   
  }
         .search{           
         display: flex;
         justify-content: end;
         @media (max-width: 768px) {            
          justify-content: center;      
  }
         input{     
            border: 2px solid #3C84F8;
            margin-right:10px ;
         }
         }
         .list{
            display: flex;
        flex-wrap:wrap;
        margin-top: -20px;   
        height: 500px;
        .list1 {
    border: 1px solid #023B96;
    width: 250px;      
    height: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    /* background-color: #d6eff8; */
    margin: 0;
    margin-top: 40px;
    margin-right: 10px;
}
  
  .list1.blue {
background:white;
}
  .listOption {
    border-radius: 10px;
    padding: 0;
    margin: 0;
 
    ul {
      width: 100%;
      height: auto;
      padding: 0;
      margin: 0;
      list-style: none;
      margin-left: 10px; 
      padding-bottom: 8px;
      li {
        line-height: 20px;
        width: 90%;
        height: auto;
        margin-top: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;     
      }
    }
    .email{
      height: auto;
      padding-bottom: 10px;
      overflow: visible;
    word-wrap: break-word;
    white-space: normal;
    }
    .status{
     
     
    }

  }
  .list1-1 {
    width: 100px;
    height: auto;
    border-radius: 10px;
  }
  .list1-2 {
    width:150px;
    height: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
  }
    }
.currentVar{
  width: 100%;
  height: auto;
}
    }
`;
