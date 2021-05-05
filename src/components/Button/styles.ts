import styled from 'styled-components'

export const Container = styled.div`
    button{
        background: ${props => props.theme.colors.primary};
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        width: 100%;
        height: 56px;
        margin-top: 8px;
        color: #fff;
        font-weight: 500;
        transition: 0.2s;
        &:hover{
            filter: brightness(0.8)
        }
    }
`