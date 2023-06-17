import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    padding-bottom: 100px;
`
export const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    padding-bottom: 2px;
    border-bottom: 2px solid #fff;
`
export const Bloco = styled.div`
    margin-top: 20px;
`
export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    max-width: 940px;
    margin: 0 auto;
`
export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    font-size: 1.1rem;
`
export const Textarea = styled.textarea`
    padding: 10px;
    border-radius: 10px;
    font-size: 1.1rem;
    height: 100px;
    resize: none;
`
export const Button = styled.button`
    padding: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgb(34, 162, 236);
    color: #fff;
    border: 1px solid #000;
    font-size: 16px;
`