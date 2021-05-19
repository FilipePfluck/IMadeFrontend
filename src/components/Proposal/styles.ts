import styled from 'styled-components'

export const Container = styled.ul`
    background: ${props => props.theme.colors.shape};
    padding: 24px 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 16px;

    cursor: pointer;

    img{
        height: 56px;
        width: 56px;
        border-radius: 50%;
    }

    @media (max-width: 800px){
        padding: 16px 20px;
    }
`
export const Header = styled.header`
    display: flex;
    align-items: center;

    img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 8px;
    }

    >div{
        display: flex;
        flex-direction: column;
        margin-left: 24px;

        strong{
            font-size: 20px;
            margin-bottom: 8px;
        }

        div{
            display: flex;
            flex-direction: row;

            svg{
                margin-right: 8px;
            }
        }
    }
`

export const Info = styled.div`
    margin-top: 24px;
    display: flex;
    max-width: 600px;
    align-items: center;

    strong{
        color: ${props => props.theme.colors.title};
        font-weight: 500;
        font-size: 20px;
        margin-right: 16px;
    }

    p{
        color: ${props => props.theme.colors.subtitle};
    }
`

export const Comment = styled.p`
    color: ${props => props.theme.colors.subtitle};
    margin-top: 24px;
`