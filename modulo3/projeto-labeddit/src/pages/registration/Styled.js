import styled from "styled-components";
import backgroundLogin from "../../assets/backgroundLogin.jpg"

export const MainDiv = styled.div`
    max-width: 100vw;
    display: grid;
    justify-content: center;
    justify-items: center;
    padding: 30px;
    gap: 15px;
    height: 86.6vh;


    margin-top: 25px;

    h1{
        font-size: 33px;
        color: #373737;
    }

    @media(min-width: 1300px){
        background-image: url(${backgroundLogin});
        background-repeat: no-repeat;
        background-position: left;
    }
    
`
export const FormStyled = styled.form`
    display: grid;
    justify-items: center;
    gap: 6px;
    margin-top: 170px;
    
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
    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 13px 133px;
        gap: 10px;

        width: 365px;
        height: 51px;
        left: 32px;
        top: 785px;

        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        border-radius: 27px;
        border: 0;
        cursor: pointer;


    }
    @media(max-height: 720px){
        transition: 2s;
        margin-top: 10px;
    }
`
export const InfoDiv = styled.div`
    margin-top: 80px;
    display: grid;
    justify-items: center;
`
export const InfoSubDiv2 = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    input{
        width: 20px;
    }
`