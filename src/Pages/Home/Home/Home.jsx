
import Footer from "../../../Share/Footer";
import NavBar from "../../../Share/NavBar";
import Extra from "../../Extra/Extra";
import Header from "../Header/Header";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Tab from "../Tab/TabBar";

const Home = () => {
    return (
        <div>

            <NavBar></NavBar>
            <Header></Header>
            <Extra></Extra>
            <PhotoGallery></PhotoGallery>
            <Tab></Tab>
            <Footer></Footer>

        </div>
    );
};

export default Home;