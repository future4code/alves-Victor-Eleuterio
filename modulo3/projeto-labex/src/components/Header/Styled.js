import styled from "styled-components";

export const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: #4a01ac;
    padding: 7px;
    align-items: center;
`
export const ButtonStyled = styled.button`
    background-color: #d9c6fc;
    border-radius: 13px;
    border: 0;
    padding: 8px;
    color: #4a01ac;
    font-size: 18px;
    cursor: pointer;
    transition:0.3s;
    &:hover{
    background-color: #c9b3f1;
    transition:0.3s;
    box-shadow: 0 0 0.4em #d9c6fc;
    }
`
export const ButtonsDiv = styled.div`
    display: flex;
    gap: 60px;
    justify-content: center;
`