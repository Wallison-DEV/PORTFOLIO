import styled from 'styled-components'
import { breakpoints } from '@/global'

export const Timeline = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 100%;
	max-width: 860px;
	margin: 24px auto 0;
	padding-left: 28px;
	text-align: left;

	&::before {
		content: '';
		position: absolute;
		top: 8px;
		bottom: 8px;
		left: 6px;
		width: 2px;
		background: var(--border-strong);
	}
`

export const Job = styled.article`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 22px;
		left: -28px;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--accent);
		border: 3px solid var(--bg);
		box-shadow: 0 0 0 2px var(--accent);
	}
`

export const JobCard = styled.div`
	padding: 24px 28px;
	background-color: var(--surface);
	border: 1px solid var(--border);
	border-radius: var(--radius);
	box-shadow: var(--shadow-sm);
	transition: box-shadow 0.25s ease, border-color 0.25s ease;

	&:hover {
		box-shadow: var(--shadow-md);
		border-color: var(--border-strong);
	}
`

export const JobHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	gap: 8px 16px;
	flex-wrap: wrap;

	@media (max-width: ${breakpoints.tablet}) {
		flex-direction: column;
	}
`

export const Role = styled.h3`
	font-size: 1.3rem;
	font-weight: 700;
	letter-spacing: -0.01em;
	color: var(--text-heading);
`

export const Period = styled.span`
	padding: 3px 12px;
	border-radius: 999px;
	background: var(--accent-soft);
	font-size: 0.85rem;
	font-weight: 600;
	color: var(--accent);
	white-space: nowrap;
`

export const Company = styled.p`
	margin-top: 2px;
	font-size: 1rem;
	font-weight: 600;
	color: var(--text-muted);
`

export const Context = styled.p`
	margin-top: 2px;
	font-size: 0.95rem;
	font-style: italic;
	color: var(--text-muted);
`

export const Bullets = styled.ul`
	margin-top: 12px;
	padding-left: 1.1rem;
	list-style: disc;
	display: flex;
	flex-direction: column;
	gap: 6px;
	font-size: 1rem;
	line-height: 1.55;
	color: var(--text-muted);
`
