import * as S from './styles'

const Navbar = () => {
    return (
        <S.NavbarContainer>
            <S.NavigationMenu>
                <S.NavigationMenuList>
                    <S.NavigationMenuItem>
                        <S.NavigationMenuLink>Start</S.NavigationMenuLink>
                    </S.NavigationMenuItem>
                    <S.NavigationMenuItem>
                        <S.NavigationMenuLink>About</S.NavigationMenuLink>
                    </S.NavigationMenuItem>
                    <S.NavigationMenuItem>
                        <S.NavigationMenuLink>Skills</S.NavigationMenuLink>
                    </S.NavigationMenuItem>
                    <S.NavigationMenuItem>
                        <S.NavigationMenuLink>Projects</S.NavigationMenuLink>
                    </S.NavigationMenuItem>
                    <S.NavigationMenuItem>
                        <S.NavigationMenuLink>Contact</S.NavigationMenuLink>
                    </S.NavigationMenuItem>
                </S.NavigationMenuList>
            </S.NavigationMenu>
        </S.NavbarContainer>
    )
}

export default Navbar
