import styled, {keyframes}  from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    
    display: flex;
    align-items: stretch;
`

export const Content = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;
`

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromLeft} 1s;
    form {
        margin: 80px 0px;
        width: 340px;
        text-align: center;
        h1 {
            margin-bottom: 24px;
        }
        a{
            color: #f4ede8;
            text-decoration: none;
            display: block;
            margin-top: 24px;
            transition: 0.2s;
            
            &:hover{
                filter: brightness(0.8)
            }
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url('/gardener.jpeg') no-repeat center;
    background-size: cover;
`

export const LinkContent = styled.div`
    display: flex;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};

    &:hover{
        filter: brightness(0.8);
    }

    svg{
        margin-right: 8px;
    }
`