import React from 'react'
import styled from 'styled-components'

const Bloco = styled.footer`
    background-color: #1100ff00;
    text-align: center;  
    height: auto;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    a{
        text-decoration: none;
        color: #fff;
    }
    i{
        font-size: 35px;
        margin: 0 10px;
        cursor: pointer;
        @media (max-width: 780px){
            font-size: 20px;
        }
    }
    p{
        font-weight: bold;
    }
`
const BlocoIcons = styled.div``

export default function Footer() {
    return (
        <Bloco>
            <Container>
                <BlocoIcons>
                    <a href='https://linkedin.com/in/joão-victor-de-assis-236957131' target='__blank'><i className="devicon-linkedin-plain"></i></a>
                    <a href='https://github.com/JoaoVic7or' target='__blank'><i className="devicon-github-original"></i></a>
                </BlocoIcons>
                <p>Copyright © 2022 - joaochacon.dev</p>
            </Container>
        </Bloco>
    )
}
