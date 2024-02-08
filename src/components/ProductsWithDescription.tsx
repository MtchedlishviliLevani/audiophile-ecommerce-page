// import { earphonePageContent1 } from "../data"
import { Link } from "react-router-dom"
import type { productContant } from "../data"
import Button from "./Button"



function ProductsWithDescription({ data }: { data: productContant[] }) {
    return (
        <section className="pb-[80px]">
            {data.map((value, i) => (
                <div key={i} className={`grid grid-cols-1   gap-[20px] lg:gap-[100px] mt-[120px] lg:grid-cols-2 `}>
                    <img loading="lazy" src={value.image.mobile} className="md:hidden rounded-[8px] w-[100%] max-h-[350px] sm:max-h-[400px] sm:object-cover sm:aspect-video" />
                    <img loading="lazy" src={value.image.tablet} className="hidden md:block lg:hidden rounded-[8px] md:h-[452px] md:w-[100%] object-cover" />
                    <img loading="lazy" src={value.image.desktop} className="hidden lg:block rounded-[8px] lg:h-[560px]" />
                    <div className={`lg:flex flex-col justify-center  ${i === 1 ? "lg:order-[-1]" : ""}`}>
                        {value.category ? <h4 className="text-[#D87D4A] text-[14px] text-center lg:text-left my-[32px] lg:my-6 ">{value.category}</h4> : null}
                        <h2 className="text-[32px] lg:text-[40px] lg:tracking-[1.4px] font-bold leading-9 lg:leading-[44px] text-center lg:text-left">{value.title}</h2>
                        <p className="text-center lg:text-left my-[24px] opacity-45">{value.paragraph}</p>
                        <Link to={value.pathName}> <Button color="buttonBackground" hoverBg="buttonBackgroundHoverOrange" position="initial" /></Link>
                    </div>
                </div>
            ))}
            <div></div>
        </section>
    )
}

export default ProductsWithDescription
