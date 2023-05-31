import React from 'react'
import { Container, H1, Nav, Li, Img } from './styles'
import { Link } from 'react-scroll'
import sobre from '../../assets/imagens_menu/info.svg'
import conhecimentos from '../../assets/imagens_menu/conhecimentos.svg'
import projetos from '../../assets/imagens_menu/folder.svg'
import contato from '../../assets/imagens_menu/mail.svg'
import MenuResponsivo from '../MenuResponsivo'

export default function Header() {
    return (
        <Container>
            <H1>&lt;joaochacon /&gt;</H1>
            <MenuResponsivo />
            <Nav>
                <ul>
                    <Li>
                        <Link to='sobre' smooth={true}>
                            <Img src={sobre} alt='Sobre' />
                            <p>Sobre</p>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='projetos' smooth={true}>
                            <Img src={projetos} alt='Projetos' />
                            <p>Projetos</p>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='conhecimentos' smooth={true}>
                            <Img src={conhecimentos} alt='Conhecimentos' />
                            <p>Conhecimentos</p>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='contato' smooth={true}>
                            <Img src={contato} alt='Contato' />
                            <p>Contato</p>
                        </Link>
                    </Li>
                </ul>
            </Nav>
        </Container>
    )
}
