import styled from "styled-components"

export const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    justify-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const TripDiv = styled.div`
    display: flex;
    margin-left: 15%;
    box-shadow: 5px 5px 5px #e1e0e4;
    border-radius: 15px;
    padding: 8px;
    justify-content: space-between;
    width: 650px;
    background-color: #e3d6fb;
    &:hover{
        background-color: #d9c6fc;

    }
    button{
        border: 0;
        border-radius: 50%;
        background-color: transparent;
        cursor: pointer;
        &:hover{
        background-color: #d9c6fc;
        color: red;
        }
    }
`
export const TripsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow: auto;
    height: 100vh;
    width: 100%;
    &::-webkit-scrollbar {
       background-color: #4901ac;
       width: 7px;
       border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #e3d6fb;
        border-radius: 20px;
        width: 5px;
    }
    h2{
        text-align: center;
    }
`
export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-left: solid #4901ac 2px;
    gap: 50px;
    padding-top: 40px;
    padding-left: 15%;
`
export const ButtonStyled = styled.button`
    padding: 15px;
    width: 270px;
    border-radius: 40px;
    border: 0;
    font-size: 20px;
    cursor: pointer;
    background-color: #e3d6fb;
    transition: 0.3s;
    &:hover{
        background-color: #ceb9f5;
        transition: 0.3s;
    };
    &:active{
        background-color: #b599eb;
        box-shadow: inset 3px 2px 1px black;
        font-size: 18px;
        padding: 16px;
    }
`
export const NameDiv = styled.div`
    width: 100%;
    cursor: pointer;
`