import React from 'react'
import { Container, Bloco, A, I, P } from './styles'

export default function Footer() {
    return (
        <Bloco>
            <Container>
                <div>
                    <A href='https://linkedin.com/in/joão-victor-de-assis-236957131' target='__blank'>
                        <I className="devicon-linkedin-plain"></I>
                    </A>
                    <A href='https://github.com/JoaoVic7or' target='__blank'>
                        <I className="devicon-github-original"></I>
                    </A>
                </div>
                <P>Copyright © 2023 - joaochacon.dev</P>
            </Container>
        </Bloco>
    )
}
