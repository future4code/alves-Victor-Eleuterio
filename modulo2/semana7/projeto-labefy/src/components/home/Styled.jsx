import styled from "styled-components";

export const DivPrincipal = styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
    text-align: center;
    height: 89.8vh;
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
    border-radius: 20px;
    background-color: #45525b;
    gap: 15px;
    padding: 30px;

`
export const DivPlaylistPrincipal = styled.div`
    justify-content: center;
    grid-template-columns: 15% 15% ;
    display: grid;
    gap:20px;
    margin-top:20px;
    overflow: auto;
    max-height: 500px;
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
        font-size: 13px;
        transition:0.5s;
        background-color: #ef7c0a
    }
`
export const InputStyled = styled.input`
    border: 0;
    border-bottom: solid #ef7c0a 1px;
    outline: none;
    background-color: transparent;
`
export const DivNav = styled.div`
    display: grid;
    gap: 20px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
`

export const AudioStyled = styled.audio`
    width: 100%;
    color: black;
`
export const Aviso = styled.div`
    color: whitesmoke;
    margin-top: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const DivMusica = styled.div`
    color: whitesmoke;
    margin-top: 50px;
`
export const DivMusicas = styled.div`
`