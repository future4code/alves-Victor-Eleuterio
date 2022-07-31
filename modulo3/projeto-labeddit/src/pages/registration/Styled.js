import styled from "styled-components";

export const MainDiv = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 15px;

    margin-top: 25px;

    h1{
        font-size: 33px;
        color: #373737;
    }
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 170px;
    
    input{
        padding: 20px;
        border-radius: 4px;
        background: #FFFFFF;
        border: 1px solid #D5D8DE;
        outline: none;
    }
    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 13px 133px;
        gap: 10px;

        position: absolute;
        width: 365px;
        height: 51px;
        left: 32px;
        top: 785px;

        background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        border-radius: 27px;
        border: 0;
       cursor: pointer;

    }
`
export const InfoDiv = styled.div`
    margin-top: 80px;
`
export const InfoSubDiv2 = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`