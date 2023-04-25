import { useState, useEffect } from 'react'
import styled from 'styled-components'
import QuemSouEu from './Blocos/QuemSouEu'
import Projetos from './Blocos/Projetos'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Conhecimentos from './Blocos/Conhecimentos'
import Contato from './Blocos/Contato'

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  color: #fff;
`

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {document.title = "João Victor Chacon"})

  return (
    <Container>
      <Header />
      <QuemSouEu />
      <Projetos />
      <Conhecimentos />
      <Contato />
      <Footer />
    </Container>
  )
}

export default App
