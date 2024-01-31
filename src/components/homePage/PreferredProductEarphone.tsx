import earphoneMob from "../../assets/images/home/mobile/image-earphones-yx1.jpg";
import earphoneTablet from "../../assets/images/home/tablet/image-earphones-yx1.jpg";
import earphoneDesktop from "../../assets/images/home/desktop/image-earphones-yx1.jpg"


function PreferredProductEarphone() {
    return (
        <div className="flex flex-col gap-6 md:flex-row md:gap-[4%] mb-[150px]">
            <img src={earphoneMob} alt="" className="md:hidden rounded-[8px]  sm:h-[270px]  md:h-[initial] md:w-[48%]" />
            <img src={earphoneTablet} alt="" className="hidden md:block xl:hidden rounded-[8px]  md:h-[initial] md:w-[48%] md:max-h-[320px] object-cover" />
            <img src={earphoneDesktop} alt="" className="hidden xl:block rounded-[8px]  md:h-[initial] md:w-[48%] md:max-h-[320px] object-cover" />

            <div className="bg-gray px-6 md:px-[41px] md:pr-[53px] py-[41px] md:py-[101px] rounded-[8px] md:w-[48%]">
                <h3 className="mb-8  text-3xl text-[28px]  font-bold">YX1 EARPHONES</h3>
                <button className="text-[13px] px-[31px] font-bold py-[15px] solid border-[2px] text-primaryText border-[#000] ">SEE PRODUCTS</button>
            </div>
        </div>
    );
}

export default PreferredProductEarphone;
