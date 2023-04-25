import React from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'

const Container = styled.div`
    margin: 10px;
    padding-bottom: 100px;
`
const H2 = styled.h2`
    font-size: 2rem;
    padding-bottom: 2px;
    border-bottom: 2px solid #fff;
`
const Bloco = styled.div`
    margin-top: 20px;
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    max-width: 940px;
    margin: 0 auto;
`
const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    font-size: 1.1rem;
`
const Textarea = styled.textarea`
    padding: 10px;
    border-radius: 10px;
    font-size: 1.1rem;
    height: 100px;
    resize: none;
`
const Button = styled.button`
    padding: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgb(34, 162, 236);
    color: #fff;
    border: 1px solid #000;
`

export default function Contato() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_hcy36pg', 'template_9khb42c', e.target, 'AwHJDYSAupxN90XCc')
            .then((result) =>{
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            toast.success('Mensagem enviada com sucesso!');
            e.target.reset()
    }

    return (
        <Container name="contato">
            <H2>Contato</H2>
            <Bloco>
                <Form onSubmit={sendEmail}>
                    <Input type='text' placeholder='Digite seu nome' name='nome_usuario' required />
                    <Input type='email' placeholder='Digite seu email' name='email_usuario' required />
                    <Input type='text' placeholder='Digite o assunto' name='assunto' required />
                    <Textarea placeholder='Digite a sua mensagem' name='mensagem' required></Textarea>
                    <Button type='submit'>Enviar mensagem</Button>
                </Form>
                <Toaster toastOptions={{duration: 4000}}/>
            </Bloco>
        </Container>
    )
}
