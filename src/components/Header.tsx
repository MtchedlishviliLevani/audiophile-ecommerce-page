import burgerMenu from "../assets/images/shared/mobile/burgerMenu.svg";
import logo from "../assets/images/shared/desktop/logo.svg";
import cart from "../assets/images/shared/desktop/icon-cart.svg";
import { useEffect, useState } from "react";
import ActiveMenu from "./ActiveMenu";
import { Link } from "react-router-dom";
import scrollUpFn from "../helper/scrollUp";
import { motion } from "framer-motion"
import { useSelector } from "react-redux";
import { rootState } from "../store";



function Header({ onIsShown, isShown }: {
    onIsShown: React.Dispatch<React.SetStateAction<boolean>>,
    isShown: boolean
}) {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const handleClick = () => {
        onIsShown(!isShown)
    };
    useEffect(() => {
        if (isOpenMenu) {
            window.document.body.style.overflow = "hidden"
        }
        return () => {
            window.document.body.style.overflow = "auto"
        }
    }, [isOpenMenu])

    const cartItemsLength = useSelector((state: rootState) => state.cart.productInfo.length)
    console.log(cartItemsLength, "cartItemsLength")
    return (
        <div className="h-[100%] flex flex-col relative">
            <motion.header
                key={Date()}
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}

                className={`bg-primaryBackground py-[32px]  ${isOpenMenu ? "fixed" : "fixed"}  w-[100%] z-50 top-0 border-solid border-b border-white-500/100`}>
                <div className=""></div>
                <div className="container">
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
                                onClick={scrollUpFn}
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
                            <div className="relative hover:cursor-pointer" onClick={handleClick}>
                                <img loading="lazy" src={cart} className="w-full h-auto z-10" alt="cart" />
                                {cartItemsLength && <div className="absolute  top-[-60%] right-[-30%]  text-buttonBackground" >{cartItemsLength}</div>}
                            </div>
                        </ul>
                    </nav>
                </div>
                {isOpenMenu && <div className="bg-blue-600"> <ActiveMenu setIsOpenMenu={setIsOpenMenu} /></div>}
            </motion.header></div>
    );
}

export default Header;
