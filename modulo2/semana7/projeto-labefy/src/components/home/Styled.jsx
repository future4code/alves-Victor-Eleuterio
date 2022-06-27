import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
    text-align: center;
    height: 500px;
    `
export const DivSecundaria = styled.div`
    overflow: auto;

`

export const DivCards = styled.div`
    display: grid;
    grid-template-columns: 17% 17% 17% 17% 17%;
    justify-content: center;
    gap: 10px;
    margin: 5%;
` 


export const DivPrincipalNav = styled.div`
    position: fixed;
    top: 10px;
    border-top: solid #13171a 1px;
    text-align: center;
    height: 100%;
    color: white;
    background-color: #13171a;
` 
export const ItemAddM = styled.a`
    color: white;

`

export const DivCard = styled.div`
    background-color: #45525b;
    border-radius: 10px;
    padding:10px;
`
export const ImgStyled = styled.img`
    width: 100%;
`
export const DivPlaylists = styled.div`
    display: grid;
    background-color: #45525b;
`
export const DivPlaylistPrincipal = styled.div`
   display: grid;
    gap: 15px;
`