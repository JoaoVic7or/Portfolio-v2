import React from 'react'
import CardsConhecimentos from '../../Components/CardsConhecimentos'
import Linguagens from './linguagens.json'
import { Container, H2, Bloco, BlocoCards } from './styles'

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
