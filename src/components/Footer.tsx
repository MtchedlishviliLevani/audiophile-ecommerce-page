import logo from "../assets/images/shared/desktop/logo.svg";
import SocialMediaIcons from "./SocialMediaIcons";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-primaryBackground  text-center md:text-left  " >
            <div className="container px-[5%] sm:px-[0]  sm:max-w-[90%] xl:max-w-[1110px] 2xl:max-w-[1300px]  mx-auto pt-12 pb-9  xl:bg-black-500 relative ">
                <div className="w-[100px] h-1 bg-buttonBackground absolute left-[50%] md:left-[0%] md:translate-x-[initial] top-[0px] translate-x-[-50%] "></div>
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:pt-[30px] md:pt-[56px]"><div className="">
                    <Link to="/"><img loading="lazy" className="m-auto md:m-[initial]" src={logo} alt="" /></Link>
                </div>
                    <ul className="my-12 md:my-8 flex flex-col gap-2 md:gap-5 xl:gap-7 md:flex-row ">
                        <li className="text-secondaryText hover:text-buttonBackground"><Link to="/">HOME</Link></li>
                        <li className="text-secondaryText hover:text-buttonBackground"><Link to="/headphones">HEADPHONES</Link></li>
                        <li className="text-secondaryText hover:text-buttonBackground"><Link to="/speakers">SPEAKERS</Link></li>
                        <li className="text-secondaryText hover:text-buttonBackground"><Link to="/earphones">EARPHONES</Link></li>

                    </ul></div>

                <p className="text-secondaryText opacity-50 xl:w-[50%]">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a
                    small team of music lovers and sound specialists who are devoted to
                    helping you get the most out of personal audio. Come and visit our
                    demo facility - we’re open 7 days a week.
                </p>
                <div className="md:flex md:justify-between md:items-center xl:items-start"><small className="text-secondaryText opacity-50 my-12 block">Copyright 2021. All Rights Reserved</small>
                    <SocialMediaIcons /></div>

            </div>
        </footer >
    );
}

export default Footer;
