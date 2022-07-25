import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    margin-top: 80px;
`
export const InfoDiv = styled.div`
    display: grid;
    justify-items: center;

    img{
        width: 152px;
    }
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 90px;

    input{
        padding: 20px;
        border-radius: 4px;
        background: #FFFFFF;
        border: 1px solid #D5D8DE;
        outline: none;
    }
`
export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
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
`