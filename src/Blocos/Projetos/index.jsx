import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './stylecarousel.css'
import CardsProjetos from '../../Componentes/CardsProjetos'
import projetos from './projetos.json'

const Container = styled.div`
    margin: 10px;
`
const H2 = styled.h2`
    font-size: 2rem;
    padding-bottom: 2px;
    border-bottom: 2px solid #fff;
    padding-top: 10px;
    @media (max-width: 950px){
      margin: 26px 10px;
    }
`
const Bloco = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    width: 100%;
    height: 100%;
`
const Carousel = styled.div`
    display: flex;
    align-items: center;
    align-self: start;
    gap: 20px;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    @media (max-width: 750px){
      padding: 0 5px;
      box-sizing: border-box;
    }
`
const Button = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
`
const responsive = {
  0: {
    items: 1
  },
  375: {
    items: 1.4
  },
  568: {
    items: 2
  },
  700: {
    items: 2.7
  },
  898: {
    items: 3.2
  },
  1010: {
    items: 3.75
  }
};

export default function Projetos() {
  return (
    <Container name="projetos">
      <H2>Projetos</H2>
      <Bloco>
        <Carousel>
          <AliceCarousel responsive={responsive} items={projetos.map(item => {
            return (
              <CardsProjetos key={item.nome} nome={item.nome} descricao={item.descricao} repositorio={item.repo} link={item.link} imagem={item.imagem} />
            )
          })} />
        </Carousel>
      </Bloco>
    </Container>
  )
}
