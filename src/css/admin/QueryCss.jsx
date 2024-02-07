import styled from "styled-components";

export const QueryCss = styled.div`
  width: 70vw;
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
      line-height: -10px;
      font-size: 1.7em;
    }
  }

  .content2 {
    margin-top: 20px;
    width: 80%;
    height: 50px;
    display: flex;
    z-index: 33;
    position: relative;

    input {
      width: 100%;
    }
    .text {
      margin-right: 10px;
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

    .type {
      height: auto;
      font-size: 20px;
      margin-top: 15px;
      input {
        height: 40px;
        margin-top: -20px;
        padding-left: 10px;
      }
      &:hover {
        ul {
          margin-top: -1px;
          width: 100%;
          display: block;
          border: 1px solid #023b96;
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
    margin-top: 20px;
    width: 80%;
    height: 350px;
    display: flex;

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
    }
  }

  .content4 {
    margin-top: 50px;
    width: 100%;
    height: auto;
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
    .filebox {
      margin-top: 15px;
      height: auto;
      .img1 {
        width: 100px;
        height: 100px;
      }
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
  padding: 10px;
  font-size: 1.1em;
  height: 100%;
`;
export const Select = styled.select`
  border: 2px #5c9bff solid;
  width: 150px;
  height: 40px;
  border-radius: 4px;
  margin: 10px;
  text-align: center;
  font-size: 1rem;
  margin-right: 10px;
`;
