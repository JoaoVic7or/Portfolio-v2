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
            <P>Sou um desenvolvedor front-end, possuo conhecimento em React, JavaScript, TypeScript, HTML e CSS. Atualmente, estou estudando C# e Java para expandir meus conhecimento.</P>
            <GithubLink href='https://github.com/JoaoVic7or' target='_blank'>
                <i className="devicon-github-original"/> GitHub
            </GithubLink>
        </Conteudo>
    </Container>
  )
}
