import { Link } from "react-router-dom";
import scrollUpFn from "../../helper/scrollUp";
function PreferredProductSpeaker2() {
    return (
        <div className="bg-[url('../../src/assets/images/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('../../src/assets/images/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('../../src/assets/images/home/desktop/image-speaker-zx7.jpg')] bg-[length:100%_100%] w-[100%] h-[320px] py-[101px] pl-[48px] lg:pl-[82px] my-[32px] rounded-[8px] ">
            <div>
                <h2 className="text-[28px] mb-[32px]  font-bold text-primaryText tracking-[1.25px] leading-[40px]">
                    ZX7 SPEAKER
                </h2>
                <Link to="/cart/ZX7" onClick={() => scrollUpFn()}><button className="text-[13px] px-[31px] font-bold py-[15px] solid border-[2px] text-primaryText border-[#000]">
                    SEE PRODUCTS
                </button></Link>
            </div>
        </div>
    );
}

export default PreferredProductSpeaker2;
