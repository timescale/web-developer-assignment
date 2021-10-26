import styled from "styled-components";

export const Header = styled.h1`
  font-family: Inter;
  font-size: 1.9rem;
`;

export const Title = styled.div`
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
  `;

export const Image = styled.img`
    width: 100%;
    height: 87%;
  `;

export const Badge = styled.div`
    height: 2vw;
    width: 2vw;
    line-height: 2vw;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 4%;
    top: 4%;
    background: white;
    border: 1px solid black;
    text-align: center;
    flex-shrink: 0;
  `;