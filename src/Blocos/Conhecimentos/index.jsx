import React from 'react'
import styled from 'styled-components'
import CardsConhecimentos from '../../Componentes/CardsConhecimentos'
import Linguagens from './linguagens.json'

const Container = styled.div`
    margin: 10px;
`
const H2 = styled.h2`
    font-size: 2rem;
    padding-bottom: 2px;
    border-bottom: 2px solid #fff;
    margin: 50px 0;
    padding-top: 10px;
    @media (max-width: 950px){
        margin: 26px 10px;
    }
`
const Bloco = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
    padding-bottom: 100px;
`
const BlocoCards = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export default function Conhecimentos() {
    return (
        <Container name="conhecimentos">
            <H2>Conhecimentos</H2>
            <Bloco>
                <BlocoCards>
                    {Linguagens.map(linguagens =>{
                        return(<CardsConhecimentos key={linguagens.id} nome={linguagens.nome} imagem={linguagens.imagem}/>)
                    })}
                </BlocoCards>
            </Bloco>
        </Container>
    )
}
