"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { MenuIcon, SunDimIcon, MoonIcon } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"

const navBarItems: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "Project Report", href: "/project-report" },
]

export function ProjectNavigationMenu() {
    const pathName = usePathname()
    const [darkMode, setDarkMode] = React.useState(false)

    // On first load, check localStorage
    React.useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setDarkMode(true)
            document.documentElement.classList.add("dark")
        }
    }, [])

    // When darkMode changes, update <html> and save preference
    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center h-[70px] p-3 bg-white dark:bg-black dark:text-white transition-colors">
                <Image src="/next.svg" alt="Logo" width={100} height={40} className="p-3 dark:invert" />
                <NavigationMenu className="p-3 ml-auto">
                    <NavigationMenuList>
                        {navBarItems.map((item, index) => {
                            const isActive = pathName === item.href
                            return (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink
                                        asChild
                                        className={`${navigationMenuTriggerStyle()} ${isActive ? "bg-gray-100 dark:bg-gray-700" : ""
                                            }`}
                                    >
                                        <Link href={item.href}>{item.title}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        })}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Dark mode toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                >
                    {darkMode ? (
                        <MoonIcon className="w-6 h-6 fill-blue-300" />
                    ) : (
                        <SunDimIcon className="w-6 h-6 fill-amber-100" />
                    )}
                </button>
            </nav>

            {/* Mobile Navbar */}
            <nav className="flex md:hidden items-center h-[70px] p-3 bg-white dark:bg-black dark:text-white transition-colors">
                <Image src="/next.svg" alt="Logo" width={100} height={40} className="p-3 dark:invert" />
                <Sheet>
                    <SheetTrigger asChild className="p-3 ml-auto">
                        <Button size={"icon"}>
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col">
                            {navBarItems.map((item, index) => {
                                const isActive = pathName === item.href
                                return (
                                    <Link
                                        href={item.href}
                                        key={index}
                                        className={`m-0.5 h-[50px] rounded-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-500 ${isActive ? "bg-gray-100 dark:bg-gray-700" : ""
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Dark mode toggle in mobile */}
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="w-10 h-10 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                            >
                                {darkMode ? (
                                    <MoonIcon className="w-6 h-6 fill-blue-100" />
                                ) : (
                                    <SunDimIcon className="w-6 h-6 fill-amber-100" />
                                )}
                            </button>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    )
}
