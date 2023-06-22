import styled from "styled-components";

export const Container = styled.div`
    background-color: rgb(255, 255, 255);
    height: 150px;
    width: 120px;
    border-radius: 15px;
    @media (max-width: 750px){
        max-width: 80%;
    }
`
export const BlocoImagem = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    height: 70%;
`
export const BlocoLinguagens = styled.div`
    height: 30%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.4rem;
    background: #3B3635;
    border-radius: 0 0 10px 10px;
    h4{
        font-weight: 400;
    }
`