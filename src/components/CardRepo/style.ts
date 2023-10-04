import styled from 'styled-components';

export const Container = styled.div`
  
  padding: 16px;
  border: 1px solid rgba(255,255,255, 0.1);
  margin-top: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all .2s ease;
  color: #fff;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.7;
}
`;

export const Content = styled.div`
width: 100%;
height: 100%;
`;

export const LineName = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

& > img {
    width: 30px;
    height: 30px;
    border-radius: 25px;
}

`;
