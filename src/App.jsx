import React, { useEffect } from 'react'
import styled from 'styled-components'
import QuemSouEu from './Containers/QuemSouEu'
import Projetos from './Containers/Projetos'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Conhecimentos from './Containers/Conhecimentos'
import Contato from './Containers/Contato'
import { GlobalSyle } from './Components/GlobalStyle'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  color: #fff;
`

function App() {
  useEffect(() => { document.title = "João Victor Chacon" })

  return (
    <Container>
      <GlobalSyle />
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
