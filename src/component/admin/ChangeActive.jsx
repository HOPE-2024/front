import styled from "styled-components";
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { UpdateActive } from "./UpdateActive";

const ActiveChangeCss = styled.div`

`;
export const ChangeActive = ({ setStatus, id, setActive }) => {
  const data = ["일반 회원", "7일 정지", "30일 정지", "회원 정지"];

  const click = async (type) => {
    await UpdateActive(id, type);
    setStatus("");
    setActive("");
  };

  return (
    <ActiveChangeCss>
      <ul>
        {data &&
          data.map((type, index) => (
            <li
              onClick={() => {
                click(type);
              }}
              key={index}
            >
              <div className="content2">
                <p>{type}</p>
              </div>
            </li>
          ))}
      </ul>
    </ActiveChangeCss>
  );
};