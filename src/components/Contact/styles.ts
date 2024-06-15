import styled from 'styled-components'
import { breakpoints } from '../../global'

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding: 10px;

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 70vh;
    }
`

export const ContactTitle = styled.h1`
    font-weight: bold;
    font-size: 3rem;
    padding-bottom: 2rem;
    text-align: center;
`

export const ContactMethod = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-bottom: 2rem;
`

export const ContactHeading = styled.h3`
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1rem;
`

export const ContactInfo = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`

export const ContactLink = styled.a`
    display: flex;
    align-items: center;
    gap: 2rem;
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
        color: blue;
    }
`

export const ContactForm = styled.form`
    width: 100%;

    .flex-end {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        @media (max-width: ${breakpoints.desktop}) {
            justify-content: center;
        }
    }
    @media (max-width: ${breakpoints.tablet}) {
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        width: 60vw;
    }
`

export const InputWrapper = styled.div`
    width: 100%;
`

export const FormInput = styled.input`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #f0f0f0;
    outline: none;
    transition: background-color 0.3s;
    &:last-child {
        margin-top: 24px;
    }
    &:focus {
        background-color: #e0e0e0;
    }
    @media (max-width: ${breakpoints.tablet}) {
    }
`

export const ErrorMessage = styled.p`
    color: red;
    font-weight: bold;
    margin-top: 0.5rem;
`

export const FormTextarea = styled.textarea`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #f0f0f0;
    outline: none;
    transition: background-color 0.3s;
    resize: vertical;
    min-width: 400px;

    &:focus {
        background-color: #e0e0e0;
    }
    @media (max-width: ${breakpoints.tablet}) {
        min-width: auto;
        margin-top:16px;
    }
`

export const SubmitButton = styled.button`
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    background-color: blue;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 16px 0 10vh;
    min-width: 490px;

    &:hover {
        background-color: #0038b8;
    }
    @media (max-width: ${breakpoints.tablet}) {
        min-width: auto;
    }
`
export const GridMethods = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
        ${ContactHeading} {
            text-align: center;
        }
    }
`

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
        margin-bottom: -24px;
    }
`
