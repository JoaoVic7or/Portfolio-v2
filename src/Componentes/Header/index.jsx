import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import sobre from '../../assets/imagens_menu/info.svg'
import conhecimentos from '../../assets/imagens_menu/conhecimentos.svg'
import projetos from '../../assets/imagens_menu/folder.svg'
import contato from '../../assets/imagens_menu/mail.svg'
import MenuResponsivo from '../MenuResponsivo'

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
`
const Nav = styled.nav`
    display: inline-block;
    height: 30px;
    @media (max-width: 900px){
        display: none;
    }
`
const H1 = styled.h1`
    font-size: 1.7rem;
    margin-left: 10px;
    user-select: none;
`
const Li = styled.li`
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    font-weight: bold;
    height: 20px;
    a{
        display: flex;
        align-items: center;
    }
`
const Img = styled.img`
    margin-right: 5px;
    height: 30px;
`
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
