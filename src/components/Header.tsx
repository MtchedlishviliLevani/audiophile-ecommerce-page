import burgerMenu from "../assets/images/shared/mobile/burgerMenu.svg";
import logo from "../assets/images/shared/desktop/logo.svg";
import cart from "../assets/images/shared/desktop/icon-cart.svg";
import { useState } from "react";
import ActiveMenu from "./ActiveMenu";
import { Link } from "react-router-dom";
import Container from "./Container";
import scrollUpFn from "../helper/scrollUp";



function Header({ onIsShown, isShown }: {
    onIsShown: React.Dispatch<React.SetStateAction<boolean>>,
    isShown: boolean
}) {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const handleClick = () => {
        onIsShown(!isShown)
    };
    return (
        <header className={`bg-primaryBackground py-[32px] ${isOpenMenu ? "static" : "fixed"}  w-[100%] z-50 top-0 border-solid border-b border-white-500/100`}>
            <div className=""></div>
            <Container>
                <nav>
                    <ul className="flex justify-between md:relative xl:static ">
                        <img
                            loading="lazy"
                            src={burgerMenu}
                            onClick={() => setIsOpenMenu(!isOpenMenu)}
                            alt=""
                            className="hover:cursor-pointer xl:hidden"
                        />

                        <Link to="/">   <img loading="lazy"
                            src={logo}
                            className="hover:cursor-pointer md:absolute md:tranform-x-[-50%] md:left-[10%] xl:static"
                        /></Link>
                        <div className="hidden xl:flex gap-[34px]">
                            <li className="hover:text-buttonBackground">
                                <Link onClick={() => scrollUpFn()} to="/" className="text-white">HOME</Link>
                            </li>
                            <li className="hover:text-buttonBackground">
                                <Link onClick={() => scrollUpFn()} className="text-white" to="/headphones">HEADPHONES</Link>
                            </li>
                            <li className="hover:text-buttonBackground">
                                <Link onClick={() => scrollUpFn()} to="/speakers">SPEAKERS</Link>
                            </li>
                            <li className="hover:text-buttonBackground">
                                <Link onClick={() => scrollUpFn()} to="/earphones">EARPHONES</Link>
                            </li>
                        </div>
                        <img onClick={handleClick} loading="lazy" src={cart} className="hover:cursor-pointer" />
                    </ul>
                </nav>
            </Container>
            {isOpenMenu && <ActiveMenu setIsOpenMenu={setIsOpenMenu} />}
        </header>
    );
}

export default Header;
