import styled from "styled-components";

export const MainDiv = styled.div`
    display: grid;
    justify-content: center;
    justify-content: center;
    width: 95vw;
    margin-top: 50px;
`
export const FormDiv = styled.div`
    padding: 30px;
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    textarea{
        padding: 10px;
        align-items: flex-start;
        padding-bottom: 80px;
        background: #EDEDED;
        border-radius: 12px;
        
        border: 0;
        font-size: 18px;
        max-width:95%;
        min-width:95%;
        max-height: 40px;

        min-height: 40px;
        outline: none;
    }
    hr{
        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
        width: 100%;
        height: 1px;
        border: 0;
    }
`
export const ButtonPost = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 145px;
        
    width: 100%;
    height: 47px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
    border-radius: 12px;
    border: 0;

    color: white;
    font-size: 18px;
    cursor: pointer;
`
export const PostComments = styled.div`
    width: 85%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const PostDiv = styled.div`
    width: 85%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`