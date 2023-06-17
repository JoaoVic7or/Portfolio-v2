import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    @media (max-width: 780px){
        gap: 10px;
    }
`
export const Bloco = styled.footer`
    background-color: #1100ff00;
    text-align: center;  
    height: auto;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const A = styled.a`
    text-decoration: none;
    color: #fff;
`
export const I = styled.i`
    font-size: 35px;
    margin: 0 10px;
    cursor: pointer;
    @media (max-width: 780px){
        font-size: 20px;
    }
`
export const P = styled.p`
    @media (max-width: 780px){
        font-size: .9rem;
    }
`