import styled from 'styled-components'

export const NavbarContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--border);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 0.75rem;
    z-index: 1000;
    min-height: 40px;
    background-color: var(--surface);
    @supports (backdrop-filter: blur(10px)) {
        background-color: color-mix(in srgb, var(--surface) 78%, transparent);
        backdrop-filter: saturate(160%) blur(14px);
        -webkit-backdrop-filter: saturate(160%) blur(14px);
    }
`;

export const NavigationMenu = styled.div`
    position: relative;
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .hamburguer {
        display: none;
        @media (max-width: 768px) {
            display: flex;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 4px;
            transform: translateY(-50%);
        }
    }

    .hamburguer button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid var(--border);
        background: var(--surface-2);
    }
`

export const NavigationMenuList = styled.ul<{ $isOpen: boolean }>`
	display: flex;
	width: 100%;
	max-width: 800px;
	align-items: center;
	flex-direction: column;

	max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
	opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
	pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
	visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};

	overflow: hidden;
	transition: all 0.3s ease;

	@media (max-width: 768px) {
		position: absolute;
		top: calc(100% + 12px);
		left: -0.75rem;
		width: calc(100% + 1.5rem);
		background: var(--surface);
		border-bottom: 1px solid var(--border);
		padding: 0.5rem 0 1rem;
		box-shadow: var(--shadow-md);
	}

	@media (min-width: 769px) {
		flex-direction: row;
		justify-content: center;
		gap: 4px;
		max-width: min(800px, calc(100% - 340px));
		max-height: none;
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
		position: static;
		box-shadow: none;
		padding: 0;
		overflow: visible;
	}
`;

export const NavigationMenuItem = styled.li`
    list-style: none;
`

export const NavigationMenuLink = styled.a<{ $isActive: boolean }>`
    display: block;
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 14px;
    text-decoration: none;
    position: relative;
    transition: color 0.2s ease, background 0.2s ease;
    color: ${({ $isActive }) => ($isActive ? 'var(--accent)' : 'var(--text-muted)')};
    background: ${({ $isActive }) => ($isActive ? 'var(--accent-soft)' : 'transparent')};

    &:hover {
        color: ${({ $isActive }) => ($isActive ? 'var(--accent)' : 'var(--text-strong)')};
        background: ${({ $isActive }) => ($isActive ? 'var(--accent-soft)' : 'var(--surface-2)')};
    }

    @media (min-width: 769px) and (max-width: 1100px) {
        font-size: 0.9rem;
        padding: 10px 8px;
    }
`

export const Controls = styled.div`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        right: 4px;
    }
`

export const LangSwitch = styled.button<{ $isEn: boolean }>`
    position: relative;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 76px;
    height: 36px;
    padding: 0;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background: var(--surface-2);
    cursor: pointer;
    font: inherit;
    font-size: 0.8rem;
    font-weight: 700;
    -webkit-tap-highlight-color: transparent;

    &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: calc(50% - 3px);
        height: calc(100% - 6px);
        border-radius: 9999px;
        background: var(--btn-bg);
        transform: translateX(${({ $isEn }) => ($isEn ? '100%' : '0')});
        transition: transform 0.25s ease;
    }

    &:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }

    span {
        position: relative;
        z-index: 1;
        text-align: center;
        transition: color 0.25s ease;
        pointer-events: none;
    }
    span:first-child {
        color: ${({ $isEn }) => ($isEn ? 'var(--text-muted)' : '#fff')};
    }
    span:last-child {
        color: ${({ $isEn }) => ($isEn ? '#fff' : 'var(--text-muted)')};
    }
`

export const ThemeButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background: var(--surface-2);
    color: var(--text-strong);
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;

    &:hover {
        background: var(--surface-3);
        border-color: var(--border-strong);
    }
`

export const Footer = styled.footer`
    padding: 32px 20px;
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-muted);
    border-top: 1px solid var(--border);
    background: var(--surface);
`