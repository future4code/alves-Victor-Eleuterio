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
export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 90px;
`
export const ButtonStyled = styled.button`
    padding: 30px;
    width: 300px;
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
        padding: 31px;

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