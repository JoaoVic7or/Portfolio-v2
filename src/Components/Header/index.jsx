import React from 'react'
import { Container, H1, Nav } from './styles'
import sobre from '../../assets/imagens_menu/info.svg'
import conhecimentos from '../../assets/imagens_menu/conhecimentos.svg'
import projetos from '../../assets/imagens_menu/folder.svg'
import contato from '../../assets/imagens_menu/mail.svg'
import MenuResponsivo from '../MenuResponsivo'
import Li from '../Li'

export default function Header() {
    const menuItems = [
        { to: 'sobre', nome: 'Sobre', img: sobre },
        { to: 'projetos', nome: 'Projetos', img: projetos },
        { to: 'conhecimentos', nome: 'Conhecimentos', img: conhecimentos },
        { to: 'contato', nome: 'Contato', img: contato },
    ];

    return (
        <Container>
            <H1>&lt;joaochacon /&gt;</H1>
            <MenuResponsivo />
            <Nav>
                <ul style={{display: "flex"}}>
                    {menuItems.map((item) => (
                        <Li key={item.to} to={item.to} nome={item.nome} img={item.img} />
                    ))}                   
                </ul>
            </Nav>
        </Container>
    )
}
