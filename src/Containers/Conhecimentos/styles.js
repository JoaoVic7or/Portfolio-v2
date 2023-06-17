import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
`
export const H2 = styled.h2`
    font-size: 2rem;
    padding-bottom: 2px;
    font-weight: 400;
    border-bottom: 2px solid #fff;
    margin: 50px 0;
    padding-top: 10px;
    @media (max-width: 950px){
        margin: 26px 10px;
    }
`
export const Bloco = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
    padding-bottom: 100px;
`
export const BlocoCards = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
`