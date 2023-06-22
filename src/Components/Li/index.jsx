import React from "react";
import { Item, Img } from './styles'
import { Link } from 'react-scroll'

export default function Li(props){
    const { to, nome, img } = props;
    return(
        <Item>
            <Link to={to} smooth={true}>
                <Img src={img} alt={nome}/>
                <p>{nome}</p>
            </Link>
        </Item>
    )
}