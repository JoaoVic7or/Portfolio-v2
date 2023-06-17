import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
    user-select: none;
    @media (max-width: 780px){
        margin: 16px 0 0 0;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: auto;
        width: 100%;
    }
`
export const BlocoImagem = styled.div`
    height: 75vh;
    width: 45%;
    max-width: 423px;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 780px){
        width: 100%;
        height: 50vh;
    }
`
export const Imagem = styled.img`
    width: 100%;
    @media (max-width: 780px){
        max-width: 400px;
        height: 100%;
    }
`
export const Conteudo = styled.div`
    height: 75vh;
    width: 55%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    box-sizing: border-box;
    gap: 20px;
    @media (max-width: 780px){
        align-items: flex-start;
        width: 100%;
        height: auto;
        margin-top: 20px;
    }
`
export const H2 = styled.h2`
    max-width: 100%;
    font-size: 2.7rem;
    text-align: center;
    @media (max-width: 780px){
        margin-bottom: 0;
        font-size: 2rem;
        text-align: center;
        width: 100%;
    }
`
export const P = styled.p`
    text-align: center;
`
export const GithubLink = styled.a`
    text-align: center;
    text-decoration: none;
    color: #fff;
    @media (max-width: 780px){
        width: 100%;
    }
`