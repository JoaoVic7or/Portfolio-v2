import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
`
export const H2 = styled.h2`
    font-size: 2rem;
    padding-bottom: 2px;
    border-bottom: 2px solid #fff;
    padding-top: 10px;
    font-weight: 400;
    @media (max-width: 950px){
      margin: 26px 10px;
    }
`
export const Bloco = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    width: 100%;
    height: 100%;
`
export const Carousel = styled.div`
    display: flex;
    align-items: center;
    align-self: start;
    gap: 20px;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    @media (max-width: 750px){
      padding: 0 5px;
      box-sizing: border-box;
    }
`