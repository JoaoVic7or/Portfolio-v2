import React, { useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll'
import './MenuResponsivo.css'
import sobre from '../../assets/imagens_menu/info.svg'
import conhecimentos from '../../assets/imagens_menu/conhecimentos.svg'
import projetos from '../../assets/imagens_menu/folder.svg'
import contato from '../../assets/imagens_menu/mail.svg'


export default function MenuResponsivo() {
    const [isOpen, setOpen] = useState(false)
    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <Menu right isOpen={isOpen} 
            onOpen={handleIsOpen} 
            onClose={handleIsOpen}
        >
            <ul className="menuresponsivo">
                <li>
                    <img src={sobre} alt='Sobre' />
                    <Link to="sobre" smooth={true} onClick={closeSideBar}>Sobre</Link>
                </li>
                <li>
                    <img src={projetos} alt='Projetos' />
                    <Link to="projetos" smooth={true} onClick={closeSideBar}>Projetos</Link>
                </li>
                <li>
                    <img src={conhecimentos} alt='Conhecimentos' />
                    <Link to="conhecimentos" smooth={true} onClick={closeSideBar}>Conhecimentos</Link>
                </li>
                <li>
                    <img src={contato} alt='Contato' />
                    <Link to="contato" smooth={true} onClick={closeSideBar}>Contato</Link>
                </li>
            </ul>
        </Menu>
    )
}
