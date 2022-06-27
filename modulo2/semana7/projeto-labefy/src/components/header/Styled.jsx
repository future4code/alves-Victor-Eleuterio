import styled from "styled-components"

export const Logo = styled.img`
    width: 80px;
`
export const DivPrincipal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #1e2428;
    justify-items: center;
    align-items: center;
    padding: 8px;
    color: whitesmoke;
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 12px;
`
export const DivImg = styled.div`
    justify-self: left;
    margin-left: 80px; 
`

export const DivLogin = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    border-radius: 50px;
    background-color: #13171a;
    padding-left: 8px;
    padding-right: 8px;
    &:hover{
    background-color: #242a2f;
    }
    
`
export const ButtonStyled = styled.button`
    border-radius: 50px;
    border: solid #ef7c0a 2px;
    padding: 5px;
    background-color: transparent;
    color: whitesmoke;
    font-family: Verdana, Tahoma, sans-serif;
    font-style: oblique;
    font-size: 12px;

    &:hover{
        padding: 10px;
        font-size: 15px;
        transition: 1s;
        background-color: #ef7c0a
    }
`