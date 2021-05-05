import styled, {keyframes, css}  from 'styled-components'

interface SelectOptionProps {
    selectedOption: string
}

export const Container = styled.div`
    height: 100vh;
    
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

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);
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
    animation: ${appearFromRight} 1s;
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
    > a{
        color: #ff9000;
        text-decoration: none;
        display: block;
        margin-top: 24px;
        transition: 0.2s;
        display: flex;
        align-items: center;
        &:hover{
            filter: brightness(0.8)
        }
        svg{
            margin-right: 8px;
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url('janitor.jpeg') no-repeat center;
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

export const SelectOption = styled.div<SelectOptionProps>`
    display: flex;
    flex-direction: row;
    strong{
        font-size: 20px;
        margin: auto;
        margin-bottom: 16px;
        transition: 0.2s;
        cursor: pointer;
        &:hover{
            filter: brightness(0.8)
        }
    }
    #client {
            ${
                (props)=> props.selectedOption === 'client' 
                && css `
                    color: ${props => props.theme.colors.primary};
                ` 
            }
    }
    #provider {
            ${
                (props)=> props.selectedOption === 'provider' 
                && css `
                    color: ${props => props.theme.colors.primary};
                ` 
            }
    }
`