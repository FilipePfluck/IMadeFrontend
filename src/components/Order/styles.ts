import styled from 'styled-components'

export const Container = styled.ul`
    height: 130px;

    background: ${props => props.theme.colors.shape};
    padding: 24px 32px;
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
        padding: 16px 20px;
    }
`

export const Information = styled.div`
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
`

export const Offers = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;

    strong{
        font-size: 18px;
        margin-right: 8px;
    }
`