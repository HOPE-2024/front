import styled from "styled-components"


const CurrentVaCss = styled.div`
    width: 100%;
    margin-top: 50px;
    height: auto;
    display: flex;
    justify-content: center;
    button{
        width: 40px;
        height: 40px;
      margin: 0 10px;
    }
`;


export const CurrentVar = ({ maxPage, currentPage, setCurrentPage }) => {
    // 버튼을 눌렀을 때 currentPage 값을 변경하는 함수
    const handleClick = (page) => {
        setCurrentPage(page - 1);
    };

    // maxPage만큼의 버튼을 생성
    const buttons = [];
    for (let i = 1; i <= maxPage; i++) {
        buttons.push(
            <button key={i} onClick={() => handleClick(i)}>
                {i}
            </button>
        );
    }

    return (
        <CurrentVaCss>
            <div className="btn"> {buttons}</div>
        </CurrentVaCss>
    );
};