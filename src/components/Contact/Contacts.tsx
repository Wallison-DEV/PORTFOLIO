import useWeb3forms from '@web3forms/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Linkedin, Github, Mail, PhoneCall, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Container } from '../../global'
import {
	ContactContainer,
	ContactTitle,
	ContactMethod,
	ContactHeading,
	ContactInfo,
	ContactLink,
	ContactForm,
	InputWrapper,
	FormInput,
	ErrorMessage,
	FormTextarea,
	SubmitButton,
	GridMethods,
	FormGrid,
} from './styles'

const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm({
		mode: 'onTouched',
	})
	const [alert, setAlert] = useState(false)

	const { submit: onSubmit } = useWeb3forms({
		access_key: 'f4c8ec73-713e-4c4c-8410-74fd99006655',
		settings: {
			// eslint-disable-next-line quotes
			from_name: "Wallison's Portfolio",
			subject: 'Contact',
		},

		onSuccess: (msg, data) => {
			console.log(msg, data)
			setAlert(true)
			reset()
			setTimeout(() => {
				setAlert(false)
			}, 3000)
		},
		onError: (msg, data) => {
			console.log(msg, data)
		},
	})

	const onSubmitHandler = (data: object) => {
		if (!isSubmitting) {
			onSubmit(data)
		}
	}

	return (
		<Container id="contact">
			<ContactContainer className='md:mt-20 lg:mt-20'>
				<ContactTitle>Como você pode me contatar</ContactTitle>
				<GridMethods>
					<ContactMethod>
						<ContactHeading>
							<Mail />
                            Email
						</ContactHeading>
						<ContactInfo>wallisonzwka@gmail.com</ContactInfo>
					</ContactMethod>
					<ContactMethod>
						<ContactHeading>
							<PhoneCall />
                            Telefone
						</ContactHeading>
						<ContactInfo>+55 (38) 99972-9817</ContactInfo>
						<Button className="mt-2 bg-blue-600 hover:bg-blue-500">
							<ContactLink
								href="https://wa.me/+5538999729817"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Send size={24} />
                                Whatsapp
							</ContactLink>
						</Button>
					</ContactMethod>
					<ContactMethod>
						<ContactHeading>Adicione nas redes</ContactHeading>
						<ContactInfo>
							<ContactLink
								href="https://github.com/Wallison-DEV"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github color="blue" size={32} />
								<p className="font-bold">/Wallison-DEV</p>
							</ContactLink>
							<ContactLink
								href="https://www.linkedin.com/in/wallison-python-dev/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin color="blue" size={32} />
								<p className="font-bold">
                                    /wallison-python-dev
								</p>
							</ContactLink>
						</ContactInfo>
					</ContactMethod>
				</GridMethods>

				<ContactTitle>Enviar e-mail</ContactTitle>
				<ContactForm onSubmit={handleSubmit(onSubmitHandler)}>
					<FormGrid>
						<InputWrapper>
							<input
								type="hidden"
								name="access_key"
								value={import.meta.env.VITE_ACCESS_KEY}
							/>
							<FormInput
								type="text"
								placeholder="Name"
								{...register('name', { required: true })}
							/>
							{errors.name && (
								<ErrorMessage>
                                    Este campo é obrigatório
								</ErrorMessage>
							)}
							<FormInput
								type="email"
								placeholder="Email"
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<ErrorMessage>
                                    Este campo é obrigatório
								</ErrorMessage>
							)}
						</InputWrapper>

						<div>
							<FormTextarea
								rows={5}
								placeholder="Message..."
								{...register('message', { required: true })}
							/>
							{errors.message && (
								<ErrorMessage>
                                    Este campo é obrigatório
								</ErrorMessage>
							)}
						</div>
					</FormGrid>
					<div className="flex-end">
						<SubmitButton type="submit">
                            Enviar Mensagem
						</SubmitButton>
					</div>

					<div
						id="toast-simple"
						className={`fixed ${alert ? 'bottom-5' : 'bottom-[-400px]'
						} transition-all duration-500 right-5 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800`}
						role="alert"
					>
						<svg
							className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 18 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
							/>
						</svg>
						<div className="pl-4 text-sm font-normal">
                            Mensagem enviada com sucesso.
						</div>
					</div>
				</ContactForm>
			</ContactContainer>
		</Container>
	)
}

export default Contact
