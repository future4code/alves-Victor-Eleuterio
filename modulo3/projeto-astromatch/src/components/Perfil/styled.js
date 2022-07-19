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
    width: 100%;
    height:100%;
    border-top: solid gray 1px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
`
export const DivNome = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 45px;
    border-bottom: solid gray 1px;
`
export const DivIcon = styled.div`
    padding: 10px;
`
export const DivInfo = styled.div`
    padding-left: 10px;
`
export const DivBio = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 59px;
    margin-bottom: 10px;
    border-bottom-left-radius: 10px;   
    border-bottom-right-radius: 10px;

`
export const DivBotoes = styled.div`
    display: grid;
    position: fixed;
    bottom: 20px;
    grid-template-columns: 50% 50%;
    gap: 10px;
    width: 100%;
    justify-items: center;
`

export const BotaoLike = styled.button`
    position: static;
    align-self: center;
    border-radius: 50%;
    position: static;
    padding: 23px;
    border: 0;
    background-color: #52b8ab;
    font-size: 20px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        transition: 0.3s;
        background-color: #6ff5e4;
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
    cursor: pointer;
    &:hover {
        background-color: #b128fc;
        transition: 0.3s;
        box-shadow: -1px 1px 6px black;
    };
    &:active {
        background-color: #430e5f;
    }
`
