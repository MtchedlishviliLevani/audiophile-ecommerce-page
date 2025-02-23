import headphonesImg from "../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../../src/assets/images/shared/desktop/image-category-thumbnail-speakers.png"
import earphonesImg from "../assets/images/shared/desktop/image-category-thumbnail-earphones.png"
import Category from "./Category";
function Categories() {
    console.log(22)
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-[68px] md:gap-[10px xl:gap-[30px] mt-[84px] pb-[84px]">
                <Category imgSrc={headphonesImg} path="/headphones" />
                <Category imgSrc={speakerImg} path="/speakers" />
                <Category imgSrc={earphonesImg} path="earphones" />
            </div>
        </div>

    )
}

export default Categories
