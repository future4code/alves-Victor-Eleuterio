import styled from "styled-components"

export const MainDiv = styled.div`
display: flex; 
flex-direction: column;
text-align: center;
color: black;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const SecondaryDiv = styled.div`
    display: grid;
    grid-template-columns: 85% 5%;
    width: 98%;
    padding: 10px;
`
export const PlanetsDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    overflow: hidden;
    gap: 12px;
`
export const PlanetDiv = styled.div`
    display: flex;
    width: 550px;
    height: 230px;
    text-align: left;
`
export const ImgStyled = styled.img`
    border-radius: 20px;
`
export const InfoDiv = styled.div`
    border-top: solid #4901ac 1px;
    border-bottom: solid #4901ac 1px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #ece6f8;
    margin-top: 20px;
    height: 80%;
    margin-bottom: 0;
    padding: 0 10px 0 10px;
    overflow: auto;
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
    b{
        color: #4901ac
    }
`
export const ButtonsDiv = styled.div`
    display: flex;
    position: fixed;
    margin-top: 5%;
    margin-left: 87%;
    align-items: center;
    flex-direction: column;
    gap: 150px;
`
export const ButtonStyled = styled.button`
    padding: 15px;
    width: 200px;
    border-radius: 40px;
    border: 0;
    font-size: 20px;
    cursor: pointer;
    background-color: #e3d6fb;
    transition: 0.3s;
    color: #4901ac;
    a{
        text-decoration: none;
        color: #4901ac;
    }
    &:hover{
        background-color: #ceb9f5;
        transition: 0.3s;
        box-shadow: 0 0 0.4em #d9c6fc;
    };
    &:active{
        background-color: #b599eb;
        box-shadow: inset 3px 2px 1px black;
        font-size: 18px;
        padding: 16px;
    }
`