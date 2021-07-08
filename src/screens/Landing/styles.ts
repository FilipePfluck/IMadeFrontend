import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 42px;
        margin-bottom: 24px;
    }

    strong{
        font-size: 24px;
    }

    div{
        width: 360px;
        display: flex;
        flex-direction: row;
        margin-top: 24px;

        button{
            margin: 9px;
        }
    }
`