import useWeb3forms from '@web3forms/react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Linkedin, Github, Mail, PhoneCall, Send } from 'lucide-react';

import { Container, PrimaryTitle } from '../../global';
import { StyledButton } from '../Hero/styles';
import * as S from './styles';
import { useT } from '@/i18n';

const Contact = () => {
	const { t } = useT();
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors },
	} = useForm({
		mode: 'onTouched',
	});
	const [alert, setAlert] = useState(false);

	const { submit: onSubmit } = useWeb3forms({
		access_key: 'f4c8ec73-713e-4c4c-8410-74fd99006655',
		settings: {
			from_name: "Wallison's Portfolio",
			subject: 'Contact',
		},

		onSuccess: (msg: any, data: any) => {
			console.log(msg, data);
			setAlert(true);
			reset();
			setTimeout(() => {
				setAlert(false);
			}, 3000);
		},
		onError: (msg: any, data: any) => {
			console.log(msg, data);
		},
	});

	const onSubmitHandler = (data: {}) => {
		if (!isSubmitting) {
			onSubmit(data);
		}
	};

	return (
		<>
			<Container id="contact" style={{ textAlign: 'center' }} data-aos='fade-up'>
				<PrimaryTitle >{t.contact.title}</PrimaryTitle>
				<S.GridMethods>
					<S.ContactMethod >
						<S.ContactHeading>
							<Mail />
							{t.contact.email}
						</S.ContactHeading>
						<S.ContactInfo>wallisonzwka@gmail.com</S.ContactInfo>
					</S.ContactMethod>
					<S.ContactMethod >
						<S.ContactHeading>
							<PhoneCall />
							{t.contact.phone}
						</S.ContactHeading>
						<S.ContactInfo>+55 (11) 96043-4146</S.ContactInfo>
						<StyledButton
							href="https://wa.me/+5511960434146"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Send size={24} />
							<p>Whatsapp</p>
						</StyledButton>
					</S.ContactMethod>
					<S.ContactMethod >
						<S.ContactHeading>{t.contact.social}</S.ContactHeading>
						<S.ContactInfo>
							<S.ContactLink
								href="https://github.com/Wallison-DEV"
								target="_blank"
								rel="noopener noreferrer"

								data-aos-delay="200"
							>
								<Github size={32} />
								<p>/Wallison-DEV</p>
							</S.ContactLink>
							<S.ContactLink
								href="https://www.linkedin.com/in/wallison-python-dev/"
								target="_blank"
								rel="noopener noreferrer"

								data-aos-delay="200"
							>
								<Linkedin size={32} />
								<p>/wallison-python-dev</p>
							</S.ContactLink>
						</S.ContactInfo>
					</S.ContactMethod>
				</S.GridMethods>

				<S.ContactTitle >{t.contact.sendEmail}</S.ContactTitle>
				<S.ContactForm onSubmit={handleSubmit(onSubmitHandler)}>
					<S.FormGrid>
						<S.InputWrapper >
							<input
								type="hidden"
								name="access_key"
								value={process.env.NEXT_PUBLIC_ACCESS_KEY}
							/>
							<S.Field>
								<S.FormInput
								type="text"
								placeholder={t.contact.name}
								{...register('name', { required: true })}
							/>
							{errors.name && (
								<S.ErrorMessage>
									{t.contact.required}
								</S.ErrorMessage>
							)}
							</S.Field>
							<S.Field>
								<S.FormInput
								type="email"
								placeholder={t.contact.emailPlaceholder}
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<S.ErrorMessage>
									{t.contact.required}
								</S.ErrorMessage>
							)}
							</S.Field>
						</S.InputWrapper>

						<div >
							<S.FormTextarea
								rows={5}
								placeholder={t.contact.message}
								{...register('message', { required: true })}
							/>
							{errors.message && (
								<S.ErrorMessage>
									{t.contact.required}
								</S.ErrorMessage>
							)}
						</div>
					</S.FormGrid>
					<S.FlexEnd >
						<S.SubmitButton type="submit">
							{t.contact.send}
						</S.SubmitButton>
					</S.FlexEnd>


				</S.ContactForm>
			</Container>
			<S.ToastAlert $alert={alert ? 1 : 0} role="alert">
				<svg
					width="20"
					height="20"
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
				<div>
					{t.contact.success}
				</div>
			</S.ToastAlert>
		</>
	);
};

export default Contact;
