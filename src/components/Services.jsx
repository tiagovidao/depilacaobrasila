import React from 'react';
import laserImage from '../images1/servico-laser-img2.png'
import ceraImage from '../images1/servico-cerar-img.png';

const servicesData = [
    {
        title: "Depilação a laser",
        description: "A depilação a laser é uma solução eficaz e duradoura para a remoção de pelos indesejados. Diferente de métodos tradicionais,ela atua na raiz do pelo, destruindo os folículos pilosos e impedindo o crescimento futuro. Após algumas sessões, a pele fica lisinha e livre de pelos por um longo período.",
        benefits: [
            "Redução Permanente de Pelos",
            "Precisão",
            "Rapidez",
            "Menos Dor",
            "Pele Suave e Uniforme"
        ],
        image: laserImage // Use imported image here
    },
    {
        title: "Depilação a cera quente",
        description: "A depilação a cera quente é uma técnica tradicional e amplamente utilizada para a remoção de pelos. Consiste na aplicação de cera quente na área desejada, que adere aos pelos e os remove pela raiz ao ser retirada, proporcionando uma sensação de suavidade e limpeza.",         
        benefits: [
            "Resultados Imediatos",
            "Eficácia em Pelos Curtos",
            "Durabilidade",
            "Exfoliação",
            "Custo-Benefício"
        ],
        image: ceraImage // Use imported image here
    }
];

const Services = () => {
    return (
        <section id="serviços-op" className="sessao-serviços-op">
            <h1>Nossos serviços</h1>
            <div className="serviços-slider">
                <div className="container">
                    {servicesData.map((service, index) => (
                        <div className="serviço" key={index}>
                            <div className="serviço-img">
                                <img src={service.image} width="80%" height="auto" alt={service.title} />
                                <h2 className="titulo"><span>{service.title}</span></h2>
                                <p className="descricao">{service.description}</p>
                                <h3>Benefícios</h3>
                                <ul>
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;