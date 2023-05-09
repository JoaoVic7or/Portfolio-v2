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
    color: #fff;
    font-size: 1.4rem;
    background: linear-gradient(0deg, rgba(0, 38, 255, 0.562) 0%, rgba(62, 194, 255, 0.76) 100%);
    border-radius: 0 10px 10px 0;
    box-shadow: 1px 0 10px #000;
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
