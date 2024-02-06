import { Link } from "react-router-dom"
import circle from "../../assets/images/home/desktop/pattern-circles.svg"
import Button from "../Button"

function PreferredProductSpeaker1() {
    return (
        <div className="bg-buttonBackground  w-[100%]  relative pt-[270px] z-[-1] overflow-hidden sm:pt-[320px] lg:pt-[130px] pb-[55px] lg:pb-[124px] rounded-[8px] lg:pr-[95px]">
            <div className="h-[170px] sm:h-[200px] lg:h-[320px] xl:h-[396px] bg-contain lg:bg-cover  min-w-[140px] sm:min-w-[200px] lg:min-w-[270px] xl:min-w-[335px] bg-no-repeat bg-[url(../../src/assets/images/home/mobile/image-speaker-zx9.png)]  absolute left-[50%] lg:left-[10%] lg:top-[229px] xl:top-[156px]  lg:translate-y-[initial] translate-x-[-50%]  top-[64px] sm:top-[89px] z-20"></div>
            {/* <div className="w-[100%] h-[300px] bg"></div> */}
            <img loading="lazy" className="absolute z-10 top-0 left-0 sm:translate-x-[-50%] sm:left-[50%] lg:left-[220px]  sm:w-[400px] lg:w-[650px] object-cover" src={circle} alt="" />
            <div className="text-center w-[90%] sm:w-[60%] lg:w-[33%] m-auto lg:m-[initial] lg:ml-auto">
                <h2 className="text-[36px] lg:text-[58px] font-bold text-secondaryText tracking-[1.25px] leading-[40px] lg:leading-[58px] lg:text-left">ZX9
                    SPEAKER</h2>
                <p className="text-[15px] my-[32px] text-secondaryText lg:text-left">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                {/* <button style={{ background: "#000" }} className=" text-secondaryText text-[13px] px-[31px] py-[15px] block m-auto lg:m-[initial] lg:mr-auto  uppercase  font-bold ">see product</button> */}
                <Link to="/cart/ZX9"><Button color="primaryBackground" hoverBg="hoverBlackColorBg" position="initial" />
                </Link>
            </div>
        </div>
    )
}

export default PreferredProductSpeaker1
