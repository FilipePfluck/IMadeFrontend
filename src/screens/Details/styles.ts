import styled, { css } from 'styled-components'

interface InfoProps{
    shouldBeBelow?: boolean
}

export const Container = styled.div`

`

export const Content = styled.div`
    max-width: 1120px;
    padding: 24px 0;
    margin: 40px auto;
`

export const Title = styled.h1`
    margin-bottom: 40px;
`

export const Info = styled.div<InfoProps>`
    margin-bottom: 24px;
    display: flex;
    max-width: 600px;
    ${props => props.shouldBeBelow ? css`
        flex-direction: column;
    ` : css`
        align-items: center;
    `}

    strong{
        color: ${props => props.theme.colors.title};
        font-weight: 500;
        font-size: 20px;
        margin-right: 16px;
        ${props => props.shouldBeBelow && css`
            margin-right: 0px;
            margin-bottom: 16px;
        `}
    }

    p{
        color: ${props => props.theme.colors.subtitle};
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    row-gap: 20px;
    margin-top: 40px;
`