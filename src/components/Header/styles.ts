import styled from 'styled-components'

export const Header = styled.header`
    padding: 24px;
    background: ${props => props.theme.colors.shape}; 
`

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    >img {
        height: 80px;
        @media(max-width: 550px){
            height: 0px;
            width: 0px;
            visibility: hidden;
        }
    }
    .right-container{
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button {
        margin-left: 16px;
        background: transparent;
        border: none;
    }
    
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 16px;
    }
    
`