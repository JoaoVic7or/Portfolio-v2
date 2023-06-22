import React from 'react'
import { Container, BlocoImagem, Img, BlocoLinguagens } from './styles'

export default function CardsConhecimento(props) {
    return (
        <Container>
            <BlocoImagem>
                <Img src={props.imagem} alt={props.nome} />
            </BlocoImagem>
            <BlocoLinguagens>
                <h4>{props.nome}</h4>
            </BlocoLinguagens>
        </Container>
    )
}
