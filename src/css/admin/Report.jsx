import styled from "styled-components";

export const MemberListCss = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    
    .content1{
   width: 200px;
   height: auto;
   font-size: 20px;
   font-weight: lighter;
   margin-top: 40px;
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
         display: flex;
         flex-direction: column;
         width:  100%;
         flex-wrap: wrap;      
     
         .search{           
         display: flex;
         justify-content: end;
         input{     
            border: 2px solid #3C84F8;
            margin-right:10px ;
         }
         }
         .list{
            display: flex;
        flex-wrap:wrap;
        .list1 {
    border: 1px solid #023B96;
    width: 250px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    /* background-color: #d6eff8; */
    margin: 8px;
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
      li {
        
        width: 90%;
        height: 20px;
        margin-top: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        
        
      }
    }
  }
  .list1-1 {
    width: 100px;
    height: 100%;
    border-radius: 10px;
  }
  .list1-2 {
    width:150px;
    height: 100%;
    border-radius: 10px;
  }
    }}
`;
