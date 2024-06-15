import styled from 'styled-components'
import { breakpoints } from '../../global'
import { StyledButton } from '../Hero/styles'

export const ContactTitle = styled.h1`
	font-weight: bold;
	font-size: 2rem;
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
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 0.5rem;
`

export const ContactInfo = styled.p`
	font-size: 1.25rem;
`
export const ContactLink = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: inherit;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: #0056b3;
	}
`

export const ContactForm = styled.form`
	width: 100%;
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
	resize: none;
	min-width: 400px;

	&:focus {
		background-color: #e0e0e0;
	}

	@media (max-width: ${breakpoints.tablet}) {
		min-width: auto;
		margin-top: 16px;
	}
`

export const GridMethods = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 32px;
    padding: 24px auto;

	@media (max-width: ${breakpoints.tablet}) {
		display: block;
	}
`

export const FormGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;

	@media (max-width: ${breakpoints.tablet}) {
		grid-template-columns: 1fr;
	}
`

export const FlexEnd = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	button{
		max-width: 440px;
	}
`

interface ToastAlertProps {
	alert: number;
}

export const ToastAlert = styled.div<ToastAlertProps>`
	position: fixed;
	bottom: ${({ alert }) => (alert ? '5px' : '-400px')};
	right: 5px;
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 320px;
	padding: 16px;
	background-color: white;
	color: gray;
	border: 1px solid gray;
	border-radius: 8px;
	transition: all 0.5s;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

	svg {
		width: 20px;
		height: 20px;
		color: #007bff;
		transform: rotate(45deg);
	}

	div {
		padding-left: 16px;
		font-size: 14px;
		font-weight: normal;
	}
`

export const SubmitButton = styled(StyledButton).attrs({as: 'button'})``