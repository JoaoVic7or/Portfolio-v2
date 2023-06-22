import styled from 'styled-components'

export const Container = styled.div`
    width: 300px;
    height: 550px;
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    margin-right: 10px;
`
export const Bloco = styled.div`
    height: 100%;
`
export const Titulo = styled.h2`
    font-weight: 400;
    height: 40px;
    padding: 0.5rem;
    @media (max-width: 780px){
        font-size: 1.2rem;
    }
`
export const Imagem = styled.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
`
export const Descricao = styled.p`
    height: 193px;
    overflow-y: auto;
    padding: 0.5rem;
    text-align: justify;
    box-sizing: border-box;
`
export const BlocoBotoes = styled.div`
    display: flex;
    border-top: 1px solid #ffffff81;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid gray;
    height: 60px;
    padding: 0 0.6rem;
`
export const A = styled.a`
    cursor: pointer;
    text-decoration: none;
`
export const Icon = styled.img`
    width: 25px;
    margin-right: 5px;
    user-select: none;
`
export const I = styled.i`
    font-size: 1.6rem;
    color: #000;
    margin-right: 10px;
`
export const Visitar = styled.img`
    width: 22px;
`