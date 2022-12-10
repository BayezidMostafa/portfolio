import { useState, useEffect } from "react";
import Portfolio from '../../../assets/bayezid_mostafa_mern_stack.pdf'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

        </ul>
    );

    return (
        <Navbar color="transparent" className="mx-auto py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span className="text-3xl text-white">_Bayezid</span>
                </Typography>
                <a href={Portfolio} download>
                    <Button
                        color="brown" ripple={false} variant="outlined" size="lg" className="hidden lg:inline-block">
                        <div className="hidden lg:block">{navList}</div>
                        <span className="text-white">Download Resume</span>
                    </Button>
                </a>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <a href={Portfolio} download>
                    <Button
                        ripple={false} variant="gradient" size="lg" fullWidth className="mb-2">
                        <span>Download Resume</span>
                    </Button>
                </a>
            </MobileNav>
        </Navbar>
    );
}