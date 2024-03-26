import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from '../ui/navigation-menu'

function Navbar() {
    return (
        <div className="w-full border-b fixed top-0 left-0 right-0 flex py-3 z-[1] justify-center bg-white">
            <NavigationMenu className="w-full wrapper flex items-center px-20">
                <NavigationMenuList className="flex w-full items-center gap-5 md:flex-row flex-col">
                    <NavigationMenuItem className="px-6">
                        <NavigationMenuLink className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100">
              Start
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100">
              About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100">
              Skills
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100">
              Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="font-bold text-2xl border-round cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100">
              Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Navbar
