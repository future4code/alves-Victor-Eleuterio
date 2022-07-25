import styled from "styled-components";

export const MainDiv = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const SecundaryDiv = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    justify-items: center;
    align-items: center;
    height: 100vh;
`
export const TripDiv = styled.div`
    display: flex;
    gap: 15px;
    width: 800px;
    height: 300px;
    border: solid #4901ac 1px;
    border-radius: 5px;
    border-right: transparent;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    background-color: #ece6f8;
`
export const ImageDiv = styled.div`
    img{
        border-bottom-left-radius: 30px;
        border-top-left-radius: 30px;
        width: 300px;

    }
`
export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    height: 300px;
    overflow: auto;
    background-color: #ece6f8;
    font-size: 20px;
    text-align: start;
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
export const SignUpTripDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-left: solid #4901ac 3px;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-left: 10%;
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
    input{
        padding: 10px;
        border: 0;
        border-bottom: solid #4901ac 2px;
        border-radius: 10px ;
        outline: none;
        width: 270px;
    }
    select{
        padding: 10px;
        border: 0;
        border-bottom: solid #4901ac 2px;
        border-radius: 10px ;
        width: 290px;
        outline: none;
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
export const DivButton = styled.div`
    padding-right: 15px;
`