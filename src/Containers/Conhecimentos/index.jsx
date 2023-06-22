import React from 'react'
import CardsConhecimentos from '../../Components/CardsConhecimentos'
import Linguagens from './linguagens.json'
import { Container, H2, Bloco, BlocoCards, BlocoGradu } from './styles'
import GraduationCard from '../../Components/GraduationCard'

export default function Conhecimentos() {
    return (
        <Container name="conhecimentos">
            <H2>Conhecimentos</H2>
            <Bloco>
                <BlocoCards>
                    {Linguagens.map(linguagens => {
                        return (<CardsConhecimentos key={linguagens.id} nome={linguagens.nome} imagem={linguagens.imagem} />)
                    })}
                </BlocoCards>
                <BlocoGradu>
                    <GraduationCard nome="Análise e Desenvolvimento de Sistemas" data="2021 - 2023" />
                    <GraduationCard nome="Ciência da Computação" data="2023 - 2026" />
                </BlocoGradu>
            </Bloco>
        </Container>
    )
}
