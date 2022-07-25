import styled from "styled-components"

export const MainDiv = styled.div`
    display: flex; 
    flex-direction: column;
    text-align: center;
    height: 100vh;
    background-image: linear-gradient(#4900ac,#7249c2, #7d78bb);
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const SecondaryDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 95vh;
    width: 100%;
`
export const ThirdDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    h4{
        text-decoration: underline 2px;
        padding-right: 220px;
        font-size: 20px;
    }
`
export const InputStyled = styled.input`
    color: white;
    width: 260px;
    padding: 10px;
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    border-bottom: solid white 2px;
    outline: none;
    &::placeholder{
        color: white;
    }
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
export const ImageDiv = styled.div`
    padding-right: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 25px;
    text-align:end;
`
export const CopyrightDiv = styled.div`
    font-size: 12px;
`