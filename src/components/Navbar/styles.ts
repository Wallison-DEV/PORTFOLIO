import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #e5e7eb;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 0.75rem 0;
    z-index: 1;
    justify-content: center;
    background-color: white;
`;

export const NavigationMenu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 5rem;
`;

export const NavigationMenuList = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1.25rem;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const NavigationMenuItem = styled.li`
    padding: 0 1.5rem;
`;

export const NavigationMenuLink = styled.a`
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    padding: 0.25rem 1.5rem;
    &:hover {
        background-color: #f3f4f6;
    }   
`;