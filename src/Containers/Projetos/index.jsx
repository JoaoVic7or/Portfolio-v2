import React from 'react'
import { Container, H2, Bloco, Carousel } from './styles'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './stylecarousel.css'
import CardsProjetos from '../../Components/CardsProjetos'
import projetos from './projetos.json'

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
    items: 2.8
  },
  898: {
    items: 3.2
  },
  1010: {
    items: 3.7
  }
};

export default function Projetos() {
  return (
    <Container name="projetos">
      <H2>Projetos</H2>
      <Bloco>
        <Carousel>
          <AliceCarousel responsive={responsive} disableDotsControls items={projetos.map(item => {
            return (
              <CardsProjetos key={item.nome} nome={item.nome} descricao={item.descricao} repositorio={item.repo} link={item.link} imagem={item.imagem} ferramentas={item.ferramentas}/>
            )
          })} />
        </Carousel>
      </Bloco>
    </Container>
  )
}
