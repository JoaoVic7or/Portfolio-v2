import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: rgb(255, 255, 255);
    height: 100px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    @media (max-width: 750px){
        max-width: 80%;
    }
`
const BlocoImagem = styled.div`
    width: 50%;
    height: 100%;
    box-shadow: 1px 0 10px #000;
    background-color: rgba(13, 128, 163, 0.863);
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    height: 70%;
`
const BlocoLinguagens = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    font-size: 1.4rem;
`

export default function CardsConhecimento(props) {
    return (
        <Container>
            <BlocoImagem>
                <Img src={props.imagem} alt={props.nome}/>
            </BlocoImagem>
            <BlocoLinguagens>
                <h4>{props.nome}</h4>
            </BlocoLinguagens>
        </Container>
    )
}
