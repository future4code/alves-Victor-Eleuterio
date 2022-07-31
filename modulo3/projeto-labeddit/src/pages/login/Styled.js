import styled from "styled-components";
import backgroundLogin from "../../assets/backgroundLogin.jpg"

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    height: 100vh;
    
    transition: 2s;
    background-color: white;
    justify-items: center;
    
    @media(min-width: 1300px){
        background-image: url(${backgroundLogin});
        background-repeat: no-repeat;
        background-position: left;
    }

    @media(max-height: 720px){
        transition: 2s;
        margin-top: 0px;
    }
    
`
export const BackgroundImg = styled.img`
    position: absolute;
    left: 0;
`

export const InfoDiv = styled.div`
    display: grid;
    justify-items: center;

    img{
        width: 152px;
    }
`
export const FormStyled = styled.form`
    display: grid;
    justify-content: center;
    gap: 6px;
    margin-top: 90px;
    transition: 2s;

    @media(max-height: 720px){
        transition: 2s;
        margin-top: 50px;
    }

    input{
        padding: 20px;
        border-radius: 4px;
        background: #FFFFFF;
        border: 1px solid #D5D8DE;
        outline: none;

        width: 363px;
        transition: 0.3s;
        &:hover{
            border: 1px solid #fe7e02;
            transition: 0.3s;

        }
        @media (max-width: 415px){
            width: 313px;
        }
    }
`
export const ButtonsDiv = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 50px;
    gap: 15px;

    hr{
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
        width: 100%;
        height: 1px;
        border: 0;
    }
`
export const ButtonContinue = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 133px;
    
    gap: 10px;
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    
    border: 0;
    font-size: 18px;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background: linear-gradient(30deg, #FF6489 0%, #F9B24E 95%);
        transition: 0.3s;
    }
`
export const ButtonCreate = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    
    width: 365px;
    height: 51px;
    border: 1px solid #FE7E02;
    border-radius: 27px;
    background-color: transparent;

    font-size: 18px;
    color: #FE7E02;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: #fdf1e5;
        transition: 0.3s;

    }
`