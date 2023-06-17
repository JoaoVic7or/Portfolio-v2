import styled from 'styled-components'

export const Container = styled.div`
    max-width: 300px;
    height: 550px;
    background-color: #282c34;
    background: linear-gradient(0deg, rgba(0, 38, 255, 0.562) 0%, rgba(62, 194, 255, 0.76) 100%);
    border-radius: 5px;
    margin-right: 10px;
`
export const Bloco = styled.div`
    padding: 1rem;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Titulo = styled.h2`
    text-align: center;
    margin-top: 6px;
    font-weight: 400;
    @media (max-width: 780px){
        font-size: 1.2rem;
    }
`
export const Imagem = styled.img`
    min-width: 100%;
    height: 250px;
    object-fit: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Descricao = styled.p`
    height: 140px;
    margin-top: 6px;
    overflow-y: auto;
`
export const BlocoBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ffffff81;
    padding-top: 10px;
`
export const A = styled.a`
    padding: 10px 0;
    background-color: #fff;
    border-radius: 10px;
    width: 45%;
    text-align: center;
    text-decoration: none;
    color: #000;
    cursor: pointer;
`
export const Icon = styled.img`
    width: 25px;
    margin-right: 5px;
    user-select: none;
`