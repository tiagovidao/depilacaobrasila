import React, { useState } from 'react';
import ig from '../images1/instagram (1).png'
import email from '../images1/o-email.png'
import cel from '../images1/smartphone (1).png'
import map from '../images1/google-maps.png'

const Footer = () => {
    const [notification, setNotification] = useState('');

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setNotification('Email copiado');
        } else if (type === 'phone') {
            setNotification('Nº de telefone copiado');
        }
        setTimeout(() => {
            setNotification('');
        }, 2000); // Notification will disappear after 2 seconds
    };

    return (
        <footer className="contatos" id="meios-contatos">
            <h1>Fale Conosco</h1>
            <div className="contatos-slider">
                <div className="container">
                    <div className="contato">
                        <div className="contato-img">
                            <img src={ig} alt="instagram icon" />
                            <p>@depilacao_brasilia</p>
                            <button onClick={() => window.open('https://www.instagram.com/depilacao_brasilia/', '_blank')}>Ir para o instagram</button>
                        </div>
                    </div>
                    <div className="contato">
                        <div className="contato-img">
                            <img src={email} alt="email icon" />
                            <p>elainevidao@gmail.com</p>
                            <button onClick={() => copyToClipboard('elainevidao@gmail.com', 'email')}>Copiar email</button>
                        </div>
                    </div>
                    <div className="contato">
                        <div className="contato-img">
                            <img src={cel} alt="telefone icon" />
                            <p>(61) 3242-3816</p>
                            <button onClick={() => copyToClipboard('(61) 3242-3816', 'phone')}>Copiar número</button>
                        </div>
                    </div>
                    <div className="contato">
                        <div className="contato-img">
                            <img src={map} alt="maps icon" />
                            <p>Asa Sul - CLS 205 Bloco B loja 9</p>
                            <button onClick={() => window.open('https://www.google.com/maps/place/Asa+Sul+Com%C3%A9rcio+Local+Sul+205+-+Asa+Sul,+Bras%C3%ADlia+-+DF,+70235-500', '_blank')}>Ver no Mapa</button>
                        </div>
                    </div>
                </div>
            </div>
            {notification && <div className="notification">{notification}</div>}
            <div className="copyright-text">
                2024 &copy; Todos os direitos reservados. Feito por Tiago William
            </div>
        </footer>
    );
};

export default Footer;