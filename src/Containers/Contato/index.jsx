import React from 'react'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'
import { Container, H2, Bloco, Form, Input, Textarea, Button } from './styles';

export default function Contato() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_hcy36pg', 'template_9khb42c', e.target, 'AwHJDYSAupxN90XCc')
            .then((result) =>{
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            toast.success('Mensagem enviada!');
            e.target.reset()
    }

    return (
        <Container name="contato">
            <Bloco>
                <H2>Contato</H2>
                <Form onSubmit={sendEmail}>
                    <Input type='text' placeholder='Nome' name='nome_usuario' required />
                    <Input type='email' placeholder='E-mail' name='email_usuario' required />
                    <Textarea placeholder='Mensagem' name='mensagem' required></Textarea>
                    <Button type='submit'>Enviar mensagem</Button>
                </Form>
                <Toaster toastOptions={{duration: 4000}}/>
            </Bloco>
        </Container>
    )
}
