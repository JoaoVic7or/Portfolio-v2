import {createGlobalStyle} from "styled-components";

export const GlobalSyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0
    }
    body{
        background: linear-gradient(#041833, #154580);
        background-repeat: no-repeat;
        background-attachment: fixed;
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
    }
`