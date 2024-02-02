import burgerMenu from "../assets/images/shared/mobile/burgerMenu.svg";
import logo from "../assets/images/shared/desktop/logo.svg";
import cart from "../assets/images/shared/desktop/icon-cart.svg";
import { useState } from "react";
import ActiveMenu from "./ActiveMenu";
import { Link } from "react-router-dom";
import Container from "./Container";

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    console.log(isOpenMenu);
    return (
        <header className="bg-primaryBackground py-[32px] border-solid border-b border-white-500/100">
            <Container>
                <nav>
                    <ul className="flex justify-between md:relative xl:static ">
                        <img loading="lazy"
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
                                <Link to="/" className="text-white">HOME</Link>
                            </li>
                            <li className="hover:text-buttonBackground">
                                <Link className="text-white" to="/headphones">HEADPHONES</Link>
                            </li>
                            <li className="hover:text-buttonBackground">
                                <Link to="/speakers">SPEAKERS</Link>
                            </li>
                            <li className="hover:text-buttonBackground">
                                <Link to="/earphones">EARPHONES</Link>
                            </li>
                        </div>
                        <img loading="lazy" src={cart} className="hover:cursor-pointer" />
                    </ul>
                </nav>
            </Container>
            {isOpenMenu && <ActiveMenu />}
        </header>
    );
}

export default Header;
