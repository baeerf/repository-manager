import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    color: #fff;
    padding-bottom: 22px;
  }
`;


export const ContainerRepo = styled.div`
width: 40vw;
height: 80vh;
border-radius: 6px;
background-color: rgba(0,0,0,0.1);
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`

export const ContentRepo = styled.div`
width: 100%;
height: 100%;
padding: 20px;
overflow-y: scroll;
display: flex;
flex-direction: column;
`;

export const Title = styled.span`
color: #fff;
opacity: 0.2;
font-size: 16px;
`;

export const StyledInput = styled(Input)`
background-color: rgba(0,0,0,0.2);
border: none;
padding: 14px;
color: #ccc;

&::placeholder {
  color: #aaa;
  opacity: 0.2;
}

`
export const ButtonSend = styled.button`
background-color: #2667ff;
padding: 12px;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 6px;
color: #fff;
margin-left: 5px;
transition: .3s ease-in-out;


&:hover {
  cursor: pointer;
  filter: brightness(80%);
}
`;

export const ListRepo = styled.div`

width: 100%;
display: flex;
justify-content: center;
flex-direction: column;

`;
