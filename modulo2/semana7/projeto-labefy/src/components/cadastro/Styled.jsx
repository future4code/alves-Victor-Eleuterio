import styled from "styled-components";


export const DivCadastro = styled.div`
    text-align: center;
    background-color: #1e2428;
    margin-top:5%;
    margin-left: 30%;
    margin-right: 30%;
    border-radius: 10px;
`

export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 30px;
    color: whitesmoke;  
    gap: 20px;
    font-family: Verdana, Tahoma, sans-serif;
`
export const BoxCadastro = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 30px;
    color: whitesmoke;  
    gap: 20px;
    font-family: Verdana, Tahoma, sans-serif;
`

export const InputStyled = styled.input`
    border: 0;
    width: 280px;
    border-radius: 3px;
    padding: 10px;
    background-color: #636363;
    font-family: Verdana, Tahoma, sans-serif;
    outline: none;
    &::placeholder{
        color: black;
    }
`

export const ButonStyled = styled.button`
    padding: 20px;
    width: 45%;
    border-radius: 40px;
    border: 0 ;
    background-color: #fe7e01;
    margin-bottom: 5px;
    &:hover{
    background-color: #ba5e02;
    color: #141414;
    /* transition: 0.5s; */


    };
    &:active{
    border-top: solid black 2px;   
    border-right: solid black 1px;
    background-color: #793e04;
    margin-bottom: 3px;
    
    }
`