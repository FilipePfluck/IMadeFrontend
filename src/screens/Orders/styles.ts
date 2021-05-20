import styled from 'styled-components'

export const Container = styled.div`

`

export const Content = styled.div`
    max-width: 1120px;
    padding: 24px 0;
    margin: 40px auto;

    @media (max-width: 1144px){
        padding: 24px;
    }
`

export const Title = styled.h1`
    margin-bottom: 40px;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    row-gap: 20px;
    margin-top: 40px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`