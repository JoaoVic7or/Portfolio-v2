import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    user-select: none;
`
export const Nav = styled.nav`
    display: inline-block;
    height: 30px;
    @media (max-width: 923px){
        display: none;
    }
`
export const H1 = styled.h1`
    font-size: 1.7rem;
    margin-left: 10px;
`