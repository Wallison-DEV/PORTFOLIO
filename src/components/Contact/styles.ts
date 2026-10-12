import styled from 'styled-components'
import { breakpoints } from '../../global'
import { StyledButton } from '../Hero/styles'

export const ContactTitle = styled.h2`
	font-weight: 700;
	font-size: 1.5rem;
	letter-spacing: -0.01em;
	color: var(--text-heading);
	margin: 40px 0 24px;
	text-align: center;
`

export const ContactMethod = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 24px 20px;
	background: var(--surface);
	border: 1px solid var(--border);
	border-radius: var(--radius);
	box-shadow: var(--shadow-sm);
	transition: box-shadow 0.25s ease, border-color 0.25s ease;

	&:hover {
		box-shadow: var(--shadow-md);
		border-color: var(--border-strong);
	}
`

export const ContactHeading = styled.h3`
	font-weight: 700;
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	gap: 0.6rem;
	color: var(--text-strong);

	svg {
		color: var(--accent);
		width: 22px;
		height: 22px;
	}
`

export const ContactInfo = styled.div`
	font-size: 1rem;
	color: var(--text-muted);
	word-break: break-word;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
`
export const ContactLink = styled.a`
	display: flex;
	align-items: center;
	gap: 10px;
	text-decoration: none;
	color: var(--text-muted);
	transition: color 0.2s ease;

	p {
		margin: 0;
	}

	&:hover {
		color: var(--accent);
	}
`

export const ContactForm = styled.form`
	width: 100%;
`

export const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 24px;
`

export const Field = styled.div`
	width: 100%;
`

export const FormInput = styled.input`
	width: 100%;
	padding: 0.9rem 1rem;
	font: inherit;
	color: var(--text);
	border: 1px solid var(--border);
	border-radius: 12px;
	background-color: var(--surface);
	outline: none;
	transition: border-color 0.2s, box-shadow 0.2s;

	&::placeholder {
		color: var(--text-muted);
		opacity: 0.8;
	}
	&:focus {
		border-color: var(--accent);
		box-shadow: 0 0 0 4px var(--accent-soft);
	}
`

export const ErrorMessage = styled.p`
	color: #e11d48;
	font-size: 0.875rem;
	font-weight: 600;
	text-align: left;
	margin: 0.375rem 0 0 0.25rem;
`

export const FormTextarea = styled.textarea`
	width: 100%;
	min-height: 170px;
	padding: 0.9rem 1rem;
	font: inherit;
	color: var(--text);
	border: 1px solid var(--border);
	border-radius: 12px;
	background-color: var(--surface);
	outline: none;
	transition: border-color 0.2s, box-shadow 0.2s;
	resize: vertical;

	&::placeholder {
		color: var(--text-muted);
		opacity: 0.8;
	}
	&:focus {
		border-color: var(--accent);
		box-shadow: 0 0 0 4px var(--accent-soft);
	}
`

export const GridMethods = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;

	@media (max-width: ${breakpoints.tablet}) {
		grid-template-columns: 1fr;
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
	$alert: number;
}

export const ToastAlert = styled.div<ToastAlertProps>`
	position: fixed;
	bottom: ${({ $alert }) => ($alert ? '16px' : '-400px')};
	right: 16px;
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 320px;
	padding: 16px;
	background-color: var(--surface);
	color: gray;
	border: 1px solid gray;
	border-radius: 8px;
	transition: all 0.5s;
	box-shadow: var(--shadow-md);

	svg {
		width: 20px;
		height: 20px;
		color: var(--accent);
		transform: rotate(45deg);
	}

	div {
		padding-left: 16px;
		font-size: 14px;
		font-weight: normal;
	}
`

export const SubmitButton = styled(StyledButton).attrs({as: 'button'})``
