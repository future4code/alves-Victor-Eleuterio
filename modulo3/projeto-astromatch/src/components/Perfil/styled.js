import styled from "styled-components";

export const DivPrincipal = styled.div`
    width: 100%;
`
export const DivPerfil = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 100%;
    
`
export const DivImg = styled.div`
    width: 100%;
    height: 250px;
`
export const ImgPerfil = styled.img`
    border-top-left-radius: 10px;   
    border-top-right-radius: 10px;   
    width: 100%;
    height:100%;
`
export const DivNome = styled.div`
    display: flex;
    text-align: center;
    background-color: #6ff5e490;
    width: 100%;
`
export const DivBio = styled.div`
    background-color: #6ff5e490;
    width: 100%;
    margin-bottom: 20px;
    border-bottom-left-radius: 10px;   
    border-bottom-right-radius: 10px;
`
export const DivBotoes = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 10px;
    width: 100%;
    justify-items: center;
`

export const BotaoLike = styled.button`
align-self: center;
    border-radius: 50%;
    position: static;
    padding: 23px;
    border: 0;
    background-color: #52b8ab;
    font-size: 20px;
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        background-color: #6ff5e4;
        padding: 26px;
        box-shadow: 1px 1px 6px black;
    };
    &:active {
        background-color: #2d665f;
    }
`
export const BotaoDislike = styled.button`
    border-radius: 50%;
    position: static;
    padding: 23px;
    border: 0;
    background-color: #811cb8;
    font-size: 20px;
    transition: 0.3s;
    &:hover {
        background-color: #b128fc;
        transition: 0.3s;
        padding: 26px;
        box-shadow: -1px 1px 6px black;
    };
    &:active {
        background-color: #430e5f;
    }
`
