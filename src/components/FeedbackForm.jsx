import React, { useState } from 'react';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        let isValid = true; // Note: Change 'const' to 'let' to allow reassignment
    
        // Reset error messages
        setErrorMessages({
            name: '',
            email: '',
            feedback: ''
        });
        setSuccessMessage('');
    
        // Validate Name
        if (!name.trim()) {
            setErrorMessages(prev => ({ ...prev, name: "O campo Nome é obrigatório." }));
            isValid = false;
        }
    
        // Validate Email
        if (!email.trim()) {
            setErrorMessages(prev => ({ ...prev, email: "O campo Email é obrigatório." }));
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessages(prev => ({ ...prev, email: "Por favor, insira um endereço de e-mail válido." }));
            isValid = false;
        }
    
        // Validate Feedback
        if (!feedback.trim()) {
            setErrorMessages(prev => ({ ...prev, feedback: "O campo Feedback é obrigatório." }));
            isValid = false;
        }
    
        // If the form is valid, display success message
        if (isValid) {
            try {
                const response = await fetch('http://localhost:5000/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, feedback }),
                });
    
                if (response.ok) {
                    setSuccessMessage("Seu feedback foi enviado com sucesso! Obrigado! 😊");
                    // Reset form fields
                    setName('');
                    setEmail('');
                    setFeedback('');
                } else {
                    throw new Error('Erro ao enviar feedback');
                }
            } catch (error) {
                setErrorMessages(prev => ({ ...prev, feedback: error.message }));
            }
        }
    };

    return (
        <section id="formulario-email" className="formulario-email">
            <h1>Envie seu feedback 📧</h1>
            <div className="container">
                <form id="feedbackForm" onSubmit={handleSubmit} noValidate>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        {errorMessages.name && <small className="error-message">{errorMessages.name}</small>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errorMessages.email && <small className="error-message">{errorMessages.email}</small>}
                    </div>
                    <div>
                        <label htmlFor="feedback">Feedback:</label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            rows="4"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                        />
                        {errorMessages.feedback && <small className="error-message">{errorMessages.feedback}</small>}
                    </div>
                    <button type="submit">Enviar</button>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
        </section>
    );
};

export default FeedbackForm;