import React, { useState, useRef, useEffect } from 'react';
import Section from '../components/Section';

// API Configuration
// O backend proxy esconde a chave da API - o cliente nunca a vê
const API_URL = '/api/chat';

const LiveDemo = () => {
    const [messages, setMessages] = useState([
        { role: 'model', text: 'Olá. Sou a Brisa, Anfritriã da Vila Aty. Posso tornar sua estadia em Atins inesquecível, quer saber como?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            const { scrollHeight, clientHeight } = chatContainerRef.current;
            chatContainerRef.current.scrollTo({
                top: scrollHeight - clientHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            // Chamar o backend proxy - a chave da API está segura no servidor
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    history: messages.filter(m => m.role !== 'model' || m.text !== 'Olá. Sou a Brisa, Anfritriã da Vila Aty. Posso tornar sua estadia em Atins inesquecível, quer saber como?')
                }),
            });

            if (!response.ok) {
                throw new Error('Falha na comunicação com o servidor');
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setMessages(prev => [...prev, { role: 'model', text: data.text }]);
        } catch (error) {
            console.error("Error calling AI:", error);
            setMessages(prev => [...prev, { role: 'model', text: `Erro: ${error.message || 'Falha na conexão'}. Tente recarregar.` }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Section id="live-demo">
            <div className="container" style={{ width: '100%', maxWidth: '1000px' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Experimente <span className="text-gradient">Agora.</span>
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
                        Esta é uma demonstração real treinada apenas com dados do Site da Vila Aty. Converse como se fosse um hóspede.
                    </p>
                </div>

                <div className="glass-card" style={{
                    height: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0',
                    overflow: 'hidden',
                    border: '1px solid var(--accent-primary)',
                    boxShadow: '0 0 50px rgba(212, 175, 55, 0.1)'
                }}>
                    {/* Chat Header */}
                    <div style={{
                        padding: '1.5rem',
                        background: 'rgba(15, 34, 30, 0.9)',
                        borderBottom: '1px solid var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: '#B4941F',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px'
                        }}>
                            <img
                                src="/vila-aty/logo-reduzida.png"
                                // Fallback to logo-reduzida or svg if available
                                onError={(e) => { e.target.style.display = 'none' }}
                                alt="Vila Aty"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'brightness(0) invert(1)'
                                }}
                            />
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', color: '#fff' }}>Vila Aty Concierge</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)' }}>● Online • Powered by Criativa + AI</div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div
                        ref={chatContainerRef}
                        style={{
                            flex: 1,
                            padding: '2rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            background: 'rgba(0,0,0,0.2)'
                        }}>
                        {messages.map((msg, idx) => (
                            <div key={idx} style={{
                                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{
                                    padding: '1rem 1.5rem',
                                    borderRadius: msg.role === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
                                    background: msg.role === 'user' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                                    color: msg.role === 'user' ? '#0F221E' : '#fff',
                                    border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                }}>
                                    {msg.text}
                                </div>
                                <span style={{
                                    fontSize: '0.7rem',
                                    marginTop: '0.5rem',
                                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    opacity: 0.5
                                }}>
                                    {msg.role === 'user' ? 'Você' : 'Vila Aty AI'}
                                </span>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', padding: '1rem', opacity: 0.7 }}>
                                <span className="typing-dot">.</span><span className="typing-dot">.</span><span className="typing-dot">.</span>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div style={{
                        padding: '1.5rem',
                        background: 'rgba(15, 34, 30, 0.9)',
                        borderTop: '1px solid var(--glass-border)',
                        display: 'flex',
                        gap: '1rem'
                    }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Pergunte sobre Atins, passeios ou estadia..."
                            style={{
                                flex: 1,
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1rem',
                                borderRadius: '30px',
                                color: '#fff',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }}
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading}
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                                border: 'none',
                                color: '#0F221E',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            ➤
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default LiveDemo;
