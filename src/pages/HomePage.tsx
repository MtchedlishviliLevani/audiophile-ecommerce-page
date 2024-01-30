import Categories from "../components/Categories"
import NewestItem from "../components/homePage/NewestItem";
// import AudioGearArticle from "../components/AudioGearArticle";

function HomePage() {
    return (
        <>
            <NewestItem />
            <div className="container px-[5%] sm:px-[0]  sm:max-w-[90%] xl:max-w-[1110px] 2xl:max-w-[1300px]  mx-auto">

                <Categories />
                {/* <AudioGearArticle /> */}
            </div>
        </>
    )
}

export default HomePage
