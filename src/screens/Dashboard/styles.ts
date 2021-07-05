import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    background: ${props => props.theme.colors.background};
`

export const Content = styled.div`
    max-width: 1120px;
    padding: 24px 0;
    margin: 40px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;

    @media (max-width: 1144px){
        padding: 24px;
    }

    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }
`

export const Section = styled.section`
    width: 100%;
`

export const List = styled.li`
    list-style: none;
    margin-top: 24px;
`

export const EmptyContentText = styled.strong`
    font-size: 18px;
`
