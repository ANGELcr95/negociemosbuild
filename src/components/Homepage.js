/* eslint-disable */
import Banner from './HomePage/Banner';
import ExclusiveBrands from './HomePage/ExclusiveBrands';
import Information from './HomePage/Information';
import Laboratories from './HomePage/Laboratories';
import NavigationBar from './HomePage/NavigationBar';
import Services from './HomePage/Services';
import Suggestions from './HomePage/Suggestions';
import Telefares from './HomePage/Telefares';
import  '../Styles/HomePage.css';
import RedFixed from './RedFixed';
import img from "./bg-main.jpg"

const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="BannerImg" style={{backgroundImage:`url(${img})`}}>
                <Information/>
                <NavigationBar/>
                {/* <RedFixed/> */}
                <Banner/>
            </div>
            {/* <Telefares/> */}
            <Suggestions/>
            <Services/>
            <Laboratories/>
            <ExclusiveBrands/>
        </div>
    );
};

export default HomePage;