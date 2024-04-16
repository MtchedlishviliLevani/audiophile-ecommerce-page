import earphoneMob from "../../assets/images/home/mobile/image-earphones-yx1.jpg";
import earphoneTablet from "../../assets/images/home/tablet/image-earphones-yx1.jpg";
import earphoneDesktop from "../../assets/images/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";
import scrollUpFn from "../../helper/scrollUp";

function PreferredProductEarphone() {
    return (
        <div className="flex flex-col gap-6 md:flex-row md:gap-[4%] mb-[150px]">
            <picture>
                <source srcSet={earphoneDesktop} media="(min-width:1100px)" />
                <source srcSet={earphoneTablet} media="(min-width:768px)" />
                <img className="rounded-[8px]"
                    src={earphoneMob} alt="" />
            </picture>

            <div className="bg-gray px-6 md:px-[41px] md:pr-[53px] py-[41px] md:py-[101px] rounded-[8px] md:w-[48%]">
                <h3 className="mb-8  text-3xl text-[28px]  font-bold">YX1 EARPHONES</h3>
                <Link to="/cart/YX1" onClick={() => scrollUpFn()}>
                    <button className="text-[13px] px-[31px] font-bold py-[15px] solid border-[2px] text-primaryText border-[#000] ">
                        SEE PRODUCTS
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default PreferredProductEarphone;
