import headphonesImg from "../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../assets/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../assets/images/shared/desktop/image-category-thumbnail-earphones.png"
import arrowRight from "../assets/images/shared/desktop/icon-arrow-right.svg"
import { Link } from "react-router-dom";


function ActiveMenu({ setIsOpenMenu }: { setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
    const closeActiveMenu = () => {
        setIsOpenMenu(false)
    }
    return (
        <div className={` overflow-auto bg-secondaryBakcground  z-30 top-[89.8px] md:top-[85px] h-[calc(100vh-89.8px)] md:h-[calc(100vh-85px)]   fixed w-[100%] xl:hidden`}>
            <div className="container">
                <div className="bg-secondaryBakcground flex flex-col md:flex-row gap-[68px] md:gap-3 mt-[84px] pb-[84px]">
                    <div className="bg-gray rounded-lg relative sm:w-[100%]">
                        <img loading="lazy" className="absolute top-[15%] w-[160px] md:w-[140px] translate-x-[-50%] translate-y-[-50%] left-[50%]" src={headphonesImg} alt="" />
                        <h4 className="text-#000-700 text-center  mt-[88px] mb-[17px]">HEADPHONES</h4>
                        <div className="flex gap-4 sm:gap-6 justify-center items-center mb-[22px]">
                            <li className="text-#000-700 opacity-50"><Link onClick={closeActiveMenu} className="text-[#000]" to="/headphones">shop</Link></li>
                            <img loading="lazy" src={arrowRight} alt="" />
                        </div>
                    </div>
                    <div className="bg-gray rounded-lg relative sm:w-[100%]">
                        <img loading="lazy" className="absolute top-[15%] w-[160px] md:w-[140px] translate-x-[-50%] translate-y-[-50%] left-[50%]" src={speakerImg} alt="" />
                        <h4 className="text-#000-700 text-center  mt-[88px] mb-[17px]">SPEAKERS</h4>
                        <div className="flex gap-4 sm:gap-6 justify-center items-center mb-[22px]">
                            <li className="text-#000-700 opacity-50"><Link onClick={closeActiveMenu} className="text-[#000]" to="/speakers">shop</Link></li>
                            <img loading="lazy" src={arrowRight} alt="" />
                        </div>
                    </div>
                    <div className="bg-gray rounded-lg relative sm:w-[100%]">
                        <img loading="lazy" className="absolute top-[15%] w-[160px] md:w-[140px] translate-x-[-50%] translate-y-[-50%] left-[50%]" src={earphonesImg} alt="" />
                        <h4 className="text-#000-700 text-center  mt-[88px] mb-[17px]">EARPHONES</h4>
                        <div className="flex gap-4 sm:gap-6 justify-center items-center mb-[22px]">
                            <li className="text-#000-700 opacity-50"><Link onClick={closeActiveMenu} className="text-[#000]" to="/earphones">shop</Link></li>
                            <img loading="lazy" src={arrowRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveMenu;
