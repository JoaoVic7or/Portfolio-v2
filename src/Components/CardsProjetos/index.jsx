import React from 'react'
import { Container, Bloco, Imagem, Titulo, Descricao, Icon, BlocoBotoes, A, Visitar, I } from './styles'
import externalLink from '../../assets/externalLink.png'

export default function CardsProjetos(props) {
    return (
        <Container>
            <Bloco>
                <Titulo>{props.nome}</Titulo>
                <Imagem src={props.imagem} alt={props.nome} />
                <Descricao>{props.descricao}</Descricao>
                <BlocoBotoes>
                    <div>
                        {props.ferramentas && props.ferramentas.map((url, index) => (
                            <Icon key={index} src={url} alt={`Ferramenta ${index + 1}`} />
                        ))}
                    </div>
                    <div>
                        <A href={props.repositorio} target='_blank' rel='noopener noreferrer'>
                            <I className="devicon-github-original" title='Repositório'/>
                        </A>
                        <A href={props.link} target='_blank' rel='noopener noreferrer'>
                            <Visitar src={externalLink} alt="visitar" title='Visitar'/>
                        </A>
                    </div>
                </BlocoBotoes>
            </Bloco>
        </Container>
    )
}
