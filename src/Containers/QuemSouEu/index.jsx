import React from 'react'
import perfil from '../../assets/perfil.svg'
import { Container, BlocoImagem, Imagem, Conteudo, H2, P, GithubLink } from './styles'

export default function QuemSouEu() {
  return (
    <Container name="sobre">
        <BlocoImagem>
            <Imagem src={perfil} alt='avatar do perfil'/>
        </BlocoImagem>
        <Conteudo>
            <H2>Olá, meu nome é João Victor</H2>
            <P>Sou desenvolvedor front-end, atualmente estou cursando Análise e Desenvolvimento de Sistemas. No momento estou buscando uma oportunidade para colocar meus conhecimentos em prática.</P>
            <GithubLink href='https://github.com/JoaoVic7or' target='_blank'>
                <i className="devicon-github-original"/> GitHub
            </GithubLink>
        </Conteudo>
    </Container>
  )
}
