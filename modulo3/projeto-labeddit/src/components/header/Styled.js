import styled from 'styled-components'

export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 22%;
    width: 100%;

    height: 50px;
    background: #EDEDED;
    position: absolute;
    top:0;
    left:0;

    img{
        position: absolute;
        top: 10px;
        left: 45%;
        right: 50%;
    }
`
export const ButtonAuthentication = styled.button`
    position: absolute;
    right: 7%;
    top: 15px;
    background-color: transparent;
    border: 0;

    font-size: 18px;
    font: 'Noto Sans';
    color: #4088CB;
`