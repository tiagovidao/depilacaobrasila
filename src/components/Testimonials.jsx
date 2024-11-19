import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialsData = [
    {
        name: "Sara",
        text: "Atendimento muito acolhedor que nos deixa tão a vontade em um momento tão íntimo rs Em breve estarei levando as filhotas para atendimento com a melhor! ❤️",
    },
    {
        name: "Silvia",
        text: "O serviço de depilação que é oferecido ótimo! Adoro a cera utilizada e quase não sinto dor, graças ao seu profissionalismo e sua simpatia 😍.",
    },
    {
        name: "Isabella Sbampato",
        text: "Gostaria de expressar minha satisfação pelos serviços prestados pela Brasília Depilação ao longo destes últimos anos. Sempre fui atendida com profissionalismo, cuidado e atenção, o que faz toda a diferença na experiência do cliente. Gostaria de destacar a atenção e o carinho da Elaine a quem desejo muito sucesso.",
    },
    {
        name: "Guilherme",
        text: "São muitos anos com a profissional experiente e cuidadosa Elaine, seja por estética ou para o esporte. O ambiente sempre limpo e organizado, assim como a cera utilizada. Sou cliente e recomendo.",
    },
    {
        name: "Helem",
        text: "Elaine é a melhor depiladora que eu conheço... já cuida de mim há mais de 30 anos e eu adoro estar com ela, não só pelo trabalho dela mas pela pessoa que ela é... sempre amiga, discreta e respeitosa. A Depilação Brasíllia é onde eu também trago a minha filha, confio de olhos fechados! Sucesso sempre, querida Elaine! 🌹",
    },
    {
        name: "Carla",
        text: "A experiência de depilar com a Depilação Brasília é questão de confiabilidade, segurança e certeza de um serviço de qualidade são mais de 20 anos, conheci noutra empresa, começando, mudou-se eu também, desencontros e finalmente retornei reencontrei e não abro mão da qualidade de ser depilada pela Depilação Brasilia",
    },
    {
        name: "Bia",
        text: "Fazer depilação com vc é excelente!! Saio sem nenhum pelinho, sem machucados e com quase uma terapia haha.",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    return (
        <section id="secao-avaliacao" className="avaliacao">
            <h1>Depoimentos de Clientes 😊</h1>
            <div className="carousel-container">
                <div className="testimonial-wrapper">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="testimonial"
                        >
                            <p className="name">{testimonialsData[currentIndex].name}</p>
                            <p className="text">{testimonialsData[currentIndex].text}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="navigation-buttons">
                    <button className="prev" onClick={prevTestimonial}>&#9664;</button>
                    <button className="next" onClick={nextTestimonial}>&#9654;</button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
