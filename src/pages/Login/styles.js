import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
`

export const Title = styled.p`
    color: #FFF;
    font-size: 44px;
    font-family: sans-serif;
    font-weight: 400;
`

export const InputColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
`

export const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

export const ButtonContainer = styled.div`
    margin-top: auto;
`