import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
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
const BlocoImagem = styled.div`
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
const Imagem = styled.img`
    width: 100%;
    @media (max-width: 780px){
        max-width: 400px;
        height: 100%;
    }
`
const Conteudo = styled.div`
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
const H2 = styled.h2`
    font-weight: 900;
    max-width: 100%;
    font-size: 3rem;
    text-align: center;
    text-shadow: 2px 2px 10px #000;
    @media (max-width: 780px){
        margin-bottom: 0;
        font-size: 2rem;
        text-align: center;
        width: 100%;
    }
`
const P = styled.p`
    text-align: center;
`

export default function QuemSouEu() {
  return (
    <Container name="sobre">
        <BlocoImagem>
            <Imagem src='https://joaochacon.dev/static/media/avataaars.fe0ef6002939018063d959d45d28f23a.svg' alt='avatar do perfil'/>
        </BlocoImagem>
        <Conteudo>
            <H2>Olá, meu nome é João Victor</H2>
            <P>Sou desenvolvedor front-end, atualmente estou cursando Análise e Desenvolvimento de Sistemas. No momento estou buscando uma oportunidade para colocar meus conhecimentos em prática.</P>
        </Conteudo>
    </Container>
  )
}
