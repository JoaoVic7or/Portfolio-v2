import styled from "styled-components";

export const Container = styled.div`
    margin: 50px 0 10px 0;
    background: #3B3538;
    width: 100%;   
    padding: 50px 0;
`
export const H2 = styled.h2`
    font-size: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 10px;
    font-weight: 400;
    @media(max-width: 950px){
        margin: 0 10px;
    }
`
export const Bloco = styled.div`
    margin-top: 20px;
    height: auto;
    width: 100%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem 0;
`
export const Carousel = styled.div`
    display: flex;
    align-items: center;
    align-self: start;
    gap: 20px;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;
    height: 100%;
`
export const Button = styled.button`
    padding: 10px;
    user-select: none;
    cursor: pointer;
    border: none;
    height: 50px;
    background: none;
    
    @media (max-width: 768px){
        display: none;
    }
`
export const Arrow = styled.img`
    width: 30px;
`
export const ArrowB = styled.img`
    transform: rotate(180deg);
    width: 30px;
`