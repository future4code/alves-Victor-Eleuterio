import styled from "styled-components"

export const MainDiv = styled.div`
    margin: 20px;
    color: #4902ad;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const SecundaryDiv = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 15px;
    justify-content: center;
`
export const TripDiv = styled.div`
    background-color:  #c9b3f1;
    border-radius: 20px;
    padding: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`
export const PendingDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color:  #c9b3f1;
    border-radius: 20px;
    padding: 20px;
    overflow: auto;
    height: 480px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
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
export const ApprovedDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #c9b3f1;
    border-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 20px;
    overflow: auto;
    height: 480px;
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
export const DivCandidate = styled.div`
    border: solid  #4901ac 1px;
    border-radius: 30px;
    padding: 10px;
    background-color: #bc9afc;
    transition: 0.3s;
    &:hover{
        background-color: #c9b3f1;
        transition: 0.3s;
    }
`
export const ButtonDecision = styled.button`
    padding: 8px;
    width: 49%;
    border-radius: 40px;
    border: 0;
    font-size: 20px;
    cursor: pointer;
    background-color: #e3d6fb;
    transition: 0.3s;
    &:hover{
        background-color: #4901ac;
        transition: 0.3s;
        color: white;
    };
`
export const ButtonStyled = styled.button`
    padding: 8px;
    width: 100%;
    border-radius: 40px;
    border: 0;
    font-size: 20px;
    cursor: pointer;
    background-color: #e3d6fb;
    transition: 0.3s;
    &:hover{
        background-color: #4901ac;
        transition: 0.3s;
        color: white;
    };
`