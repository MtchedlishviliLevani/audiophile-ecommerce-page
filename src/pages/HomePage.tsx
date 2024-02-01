// import Categories from "../components/Categories"
import Container from "../components/Container";
import NewestItem from "../components/homePage/NewestItem";
import PreferredProducts from "../components/homePage/PreferredProducts";
// import AudioGearArticle from "../components/AudioGearArticle";

function HomePage() {
    return (
        <>
            <NewestItem />
            <Container><PreferredProducts /></Container>

            {/* <AudioGearArticle /> */}

        </>
    )
}

export default HomePage
