import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 300px;
    height: 550px;
    background-color: #282c34;
    background: linear-gradient(0deg, rgba(0, 38, 255, 0.562) 0%, rgba(62, 194, 255, 0.76) 100%);
    border-radius: .7rem;
    margin-right: 10px;
    h2{
        text-align: center;
    }
`
const Bloco = styled.div`
    padding: 1rem;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Imagem = styled.img`
    border-radius: .5rem;
    min-width: 100%;
    height: 250px;
    object-fit: cover;
`
const Descricao = styled.p`
    height: 140px;
    overflow-y: auto;
`
const BlocoBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ffffff81;
    padding-top: 10px;
`
const A = styled.a`
    padding: 10px 0;
    background-color: #fff;
    border-radius: 10px;
    width: 45%;
    text-align: center;
    text-decoration: none;
    color: #000;
    cursor: pointer;
`

export default function CardsProjetos(props) {
    return (
        <Container>
            <Bloco>
                <Imagem src={props.imagem} alt={props.nome} />
                <h2>{props.nome}</h2>
                <hr/>
                <Descricao>{props.descricao}</Descricao>
                <BlocoBotoes>
                    <A href={props.repositorio} target='_blank' rel='noopener noreferrer'>Repositorio</A>
                    <A href={props.link} target='_blank' rel='noopener noreferrer'>Visitar</A>
                </BlocoBotoes>
            </Bloco>
        </Container>
    )
}
