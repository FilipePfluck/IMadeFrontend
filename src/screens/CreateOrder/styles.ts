import styled, {css} from 'styled-components'

import { shade } from 'polished'

import { Form as UnformForm } from '@unform/web'

export const Container = styled.div`
    min-height: 100vh;
    background: ${props => props.theme.colors.background};
`

export const Content = styled.div`
    max-width: 1120px;
    padding: 24px 0;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .button{
        width: 320px;
        margin: 32px auto;
    }

    @media (max-width: 1144px){
        padding: 16px;
    }
`

export const Form = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;

    @media (max-width: 1144px){
        padding: 24px;
    }

    @media(max-width: 1000px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        gap: 16px;
    }

    p{
        margin-top: 16px;
        margin-bottom: 32px;
        color: ${props => props.theme.colors.subtitle};
        font-size: 20px;
    }
`

export const PriceInoutsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;

    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
    }
`

export const Calendar = styled.div`
    width: 100%;
    margin: 0 auto;

    @media(max-width: 1000px){
        width: 85%;
    }

    .DayPicker {
    background: ${props => props.theme.colors.inputs};
    border-radius: 10px;
    padding: 32px;
    }
    .DayPicker-wrapper {
    padding-bottom: 0;
    }
    .DayPicker,
    .DayPicker-Month {
    width: 100%;
    }
    .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    }
    .DayPicker-Day {
    width: 40px;
    height: 40px;
    }
    .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: ${props => props.theme.colors.shape};
    border-radius: 10px;
    color: #fff;
    }
    .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
        ${props => 
            css`
                background-color: ${shade(0.2, props.theme.colors.shape)}
            `
        }
    }
    .DayPicker-Day--today {
    font-weight: normal;
    }
    .DayPicker-Day--disabled {
    color: ${props => props.theme.colors.unimportant} !important;
    background: transparent !important;
    }
    .DayPicker-Day--selected {
    background: ${props => props.theme.colors.primary} !important;
    border-radius: 10px;
    color: ${props => props.theme.colors.title} !important;
    }
    @media(max-width: 800px){
        margin-top: 32px;
    }
`