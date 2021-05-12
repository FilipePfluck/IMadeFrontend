import styled from 'styled-components'

export const Container = styled.ul`
    height: 130px;

    background: ${props => props.theme.colors.shape};
    padding: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 16px;

    cursor: pointer;

    img{
        height: 56px;
        width: 56px;
        border-radius: 50%;
    }

    @media (max-width: 800px){
        padding:16px;
    }
`

export const Information = styled.div`
    margin-left: 32px;
    display: flex;
    flex-direction: column;

    strong{
        color: ${props => props.theme.colors.title};
        font-size: 24px;
    }

    p{
        color: ${props => props.theme.colors.subtitle};
        margin-top: 4px;
    }

    div{
        margin-top: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        
        span{
            margin-right: 24px;
            display: flex;
            align-items: center;

            svg{
                margin-right: 4px;
            }
        }
    }

    @media (max-width: 800px){
        margin-left: 16px;
    }
`