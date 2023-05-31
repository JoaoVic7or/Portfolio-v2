import React from 'react'
import { Container, Bloco, Imagem, Titulo, Descricao, Icon, BlocoBotoes, A } from './styles' 

export default function CardsProjetos(props) {
    return (
        <Container>
            <Bloco>
                <Imagem src={props.imagem} alt={props.nome} />
                <Titulo>{props.nome}</Titulo>
                <hr />
                <Descricao>{props.descricao}</Descricao>
                <div>
                    {props.ferramentas && props.ferramentas.map((url, index) => (
                        <Icon key={index} src={url} alt={`Ferramenta ${index + 1}`} />
                    ))}
                </div>
                <BlocoBotoes>
                    <A href={props.repositorio} target='_blank' rel='noopener noreferrer'>Repositorio</A>
                    <A href={props.link} target='_blank' rel='noopener noreferrer'>Visitar</A>
                </BlocoBotoes>
            </Bloco>
        </Container>
    )
}
