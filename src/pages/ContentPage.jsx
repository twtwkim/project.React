import Footer from "../common/Footer";
import Header from "../common/Header";
import ContentCarousel from "../components/Content/ContentCarousel";


const ContentPage = () => {
    return (
        <>
            <Header isWhiteBackground/>
            <ContentCarousel/>
            <Footer/>
        </>
    );
};

export default ContentPage;