import './Header.css'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
      };

    const handleHome = () => {
        navigate('/');
    }
    const handleAbout = () => {
        navigate('/about');
    }
    const handlePortfolio = () => {
        navigate('/portfolio');
    }
    const handlePrice = () => {
        navigate('/price');
    }
    const handleContact = () => {
        navigate('/contact');
    }
    const handleInsta = () => {
        window.open('https://instagram.com/slubowska_photo?igshid=MzRlODBiNWFlZA==', "_blank", "noreferrer");
    }
    const handleFacebook = () => {
        window.open('https://facebook.com', "_blank", "noreferrer");
    }

    return (
        <div className='app-header'>
            <div className='logo-container' onClick={handleHome}>
                Logo
            </div>
            <div className='links-container'>
                <div className='app-links'>
                    <a className='about-link' onClick={handleAbout}>{t("about")}</a>
                    <a className='portfolio-link' onClick={handlePortfolio}>{t("portfolio")}</a>
                    <a className='price-link' onClick={handlePrice}>{t("price")}</a>
                    <a className='contact-link' onClick={handleContact}>{t("contact")}</a>
                </div>
                <select value={i18n.language} onChange={onChangeLang}>
                    <option value="pl">Polski</option>
                    <option value="en">English</option>
                </select>

                <div className='social-media'>
                    <div className='insta-link' onClick={handleInsta}>INST</div>
                    <div className='facebook-link' onClick={handleFacebook}>FFF</div>
                </div>
            </div>
        </div>
    )
}

export default Header