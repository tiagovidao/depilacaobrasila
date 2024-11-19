import React from 'react';
import logo from '../images1/logo_db_colorido.png'; // Adjust the path as necessary
import whatsappIcon from '../images1/whatsapp (7).png'; // Adjust the path as necessary

const Header = () => {
    const openWhatsApp = () => {
        window.open("https://wa.me/556132423816", "_blank");
    };

    return (
        <header>
            <div className="container">
                <section className="logo">
                    <img src={logo} alt="Logo" />
                </section>
                <div id="whatsapp-button" className="sidebar-button" onClick={openWhatsApp}>
                    <img src={whatsappIcon} alt="WhatsApp" />
                </div>
            </div>
        </header>
    );
};

export default Header;