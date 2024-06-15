import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #e5e7eb;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 0.75rem;
    z-index: 1000;
    background-color: white;
    min-height: 40px;
    `;
    
export const NavigationMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .hamburguer {
        display: none;
        @media (max-width: 768px) {
            display: block;
            position: absolute;
            top: 8px;
            left: 16px;
        }
    }
`;

export const NavigationMenuList = styled.ul<{ isOpen: boolean }>`
    display: flex;
    width: 100%;
    max-width: 800px;
    align-items: center;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        max-height: none;
        opacity: 1;
        transition: none;
    }
`;

export const NavigationMenuItem = styled.li`
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1); 
    }
`;

export const NavigationMenuLink = styled.a<{ isActive: boolean }>`
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 0.375rem;
    cursor: pointer;
    padding: 12px;
    text-decoration: none; 
    position: relative;
    transition: all 0.2s ease-in-out;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px; 
        background: ${({ isActive }) => (isActive ? '#000' : 'transparent')};
        position: absolute;
        left: 0;
        bottom: 8px; 
        transition: background 0.2s ease-in-out;
    }

    &:hover::after {
        background: #2a2a2a;
    }
`;
