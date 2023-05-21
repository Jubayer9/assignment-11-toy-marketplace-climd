
import useTitle from "../../../Hook/UseTitle";
import Footer from "../../../Share/Footer";
import NavBar from "../../../Share/NavBar";
import Extra from "../../Extra/Extra";
import Extra2 from "../../Extra2/Extra2";
import Header from "../Header/Header";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Tab from "../Tab/TabBar";

const Home = () => {
    useTitle('Hero Bag/Home')
    return (
        <div>

            <NavBar></NavBar>
            <Header></Header>
            <Extra></Extra>
            <PhotoGallery></PhotoGallery>
            <Extra2></Extra2>
            <Tab></Tab>
            <Footer></Footer>

        </div>
    );
};
 
export default Home;