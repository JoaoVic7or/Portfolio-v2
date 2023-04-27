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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
    }
`