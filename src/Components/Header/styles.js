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
    @media (max-width: 900px){
        display: none;
    }
`
export const H1 = styled.h1`
    font-size: 1.7rem;
    margin-left: 10px;
`
export const Li = styled.li`
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    font-weight: bold;
    height: 20px;
    a{
        display: flex;
        align-items: center;
    }
`
export const Img = styled.img`
    margin-right: 5px;
    height: 30px;
`