import styled from "styled-components";

export const DivPrincipal = styled.div`
    background-color: white;
    width: 100%;
    height: 440px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: solid gray 1px;
    border-radius: 10px;
    &::-webkit-scrollbar {
        border-radius: 20px;
        border: solid gray 1px;
        width: 12px;
        background-color: whitesmoke;
    };
    &::-webkit-scrollbar-thumb{
        background-color: #811cb8;
        border-radius: 10px;
        width: 6px;
    };
    
`
export const DivPerfil = styled.div`
    display: flex;
    align-items: center;
    border-bottom: solid gray 1px;
    padding: 8px;
    padding-left: 8px;
    gap: 10px;
    &:hover{
        background-color: whitesmoke;
    }
`
export const DivImg = styled.div`
`
export const Img = styled.img`
    border-radius: 50%;
    width: 60px;
    height:65px;
`