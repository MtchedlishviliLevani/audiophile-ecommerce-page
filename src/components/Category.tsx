import { Link } from "react-router-dom"
import arrowRight from "../../src/assets/images/shared/desktop/icon-arrow-right.svg"
import scrollUpFn from "../helper/scrollUp"
function Category({ imgSrc, path }: { imgSrc: string, path: string }) {
    return (
        <div className="bg-gray rounded-lg relative sm:w-[100%]">
            <img loading="lazy" className="absolute top-[15%] w-[160px] md:w-[140px] translate-x-[-50%] translate-y-[-50%] left-[50%]" src={imgSrc} alt="" />
            <h4 className=" text-center  xl:text-[18px] font-bold  mt-[88px] mb-[17px]">HEADPHONES</h4>
            <div className="flex gap-4 sm:gap-6 justify-center items-center mb-[22px]">
                <Link to={path} onClick={() => scrollUpFn()}><span className="font-bold opacity-50">shop</span></Link>
                <img loading="lazy" src={arrowRight} alt="" />
            </div>
        </div>
    )
}

export default Category
