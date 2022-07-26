import styled from "styled-components"

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 9px 10px;
    gap: 18px;

    width: 334px;
    height: 167px;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
`
export const ButtonsDiv = styled.div`
    position: absolute;
    margin-top: 120px;
    display: flex; 
    gap: 20px;
    align-items: center;

`
export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4.66667px;
    
    gap: 8px;
    width: 65.33px;
    height: 28px;
    border: 0.793333px solid #ECECEC;
    border-radius: 28px;

    button{
        border: 0;
        background-color: transparent;
    }
`