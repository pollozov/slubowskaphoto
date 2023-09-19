import './Home.css'
import { useTranslation } from "react-i18next";

import Home1 from '../../assets/photos/home_1.jpg'
import Home2 from '../../assets/photos/home_2.jpg'
import Home3 from '../../assets/photos/home_3.jpg'
import Home4 from '../../assets/photos/home_4.jpg'

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <div className='slider-wrapper'>
                <div className='slider'>
                    <img id="slide-1" src={Home1} alt='slide 1'></img>
                    <img id="slide-2" src={Home2} alt='slide 2'></img>
                    <img id="slide-3" src={Home3} alt='slide 3'></img>
                    <img id="slide-4" src={Home4} alt='slide 4'></img>
                </div>
                <div className='slider-nav'>
                    <a href='#slide-1'></a>
                    <a href='#slide-2'></a>
                    <a href='#slide-3'></a>
                    <a href='#slide-4'></a>
                </div>
            </div>
            
            <div className='name-container'>
                <div className='name'>{t("home_name")}</div>
                <div className='desc'>{t("home_description")}</div>
            </div>
        </div>
    )
}

export default Home