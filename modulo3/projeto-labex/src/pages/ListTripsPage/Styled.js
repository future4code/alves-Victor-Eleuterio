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
    grid-template-columns: 85% 15%;
    height: 95vh;
    width: 100%;
`
export const PlanetsDiv = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 85vh;
    overflow: hidden;
    gap: 20px;
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