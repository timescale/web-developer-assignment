import styled from "styled-components";

export const Header = styled.h1`
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 3vh 0vh 2vh 0vh;
`;

export const Title = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  font-family: Inter;
`;

export const Wrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 55vh;
  width: 100%;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 87%;
`;

export const Badge = styled.div`
  height: 4vh;
  height: 4vh;
  width: 4vh;
  line-height: 2vw;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 4%;
  top: 4%;
  background: white;
  border: 1px solid black;
  text-align: center;
  font-size: 1vw;
  overflow: hidden;
`;
