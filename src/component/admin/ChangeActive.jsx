import styled from "styled-components"
import { AdminAxiosApi } from "../../api/AdminAxiosApi";
import { UpdateActive } from "./UpdateActive";

const ActiveChangeCss = styled.div`  
    height: auto;  
    display: flex;
    position: absolute;
    margin-top: 200px;
    margin-left: -270px;
  
    ul{
    
        height: auto;      
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        li:hover{
            background: #023B96;
           p{ color  :white ;
        }
    }

    }
    li{          
        
        border: 1px solid  #023B96;   
        background: #ffffff;
        border-radius  :4px ;
        height: auto;       
        font-size: 1em;
        margin: 4px;        
     p{     
          width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;      
     }
        
    }
`
export const ChangeActive = ({ setStatus, id, setActive }) => {

    const data = [
        "일반 회원",
        "채팅 7일 정지",
        "채팅 30일 정지",
        "회원 정지"
    ];

    const click = async (type) => {

        await UpdateActive(id, type);
        setStatus('')
        setActive('')
    }

    return (
        <ActiveChangeCss>
            <ul>
                {data && data.map((type, index) => (
                    <li onClick={() => { click(type) }} key={index}>
                        <div className="content2">
                            <p>{type}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </ActiveChangeCss>
    );
}
