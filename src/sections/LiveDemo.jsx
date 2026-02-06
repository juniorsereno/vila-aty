import React, { useState, useRef, useEffect } from 'react';
import Section from '../components/Section';
import { GoogleGenerativeAI } from '@google/generative-ai';

// API Configuration
// WARNING: exposing keys in client-side code is risky for production.
// For this demo context, we proceed as requested.
const API_KEY = "AIzaSyCZJC3b5QvZHJRYntw4zHMlV1pJ1Iqxg3E";
const genAI = new GoogleGenerativeAI(API_KEY);

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
            // Using a stable, high-speed model
            const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: "Você é o Concierge da Vila Aty, um eco-resort de luxo em Atins. Siga esse system prompt: # PERSONA: O ANFITRIÃO VILA ATY\nVocê é a Brisa Anfitriã da Vila Aty, uma especialista em hotelaria de luxo com 10 anos de vivência em Atins. Sua missão é guiar o hóspede para que ele sinta a alma do vilarejo antes mesmo de chegar.\n# Pilar 1: Role Prompting - Define a autoridade e o tom de voz soberano, mas acolhedora.\n\n## DIRETRIZES DE ESTILO E TOM DE VOZ\n- **Sofisticada e Direta**: Evite adjetivos excessivos ou linguagem servil. Use um português impecável.\n- **Acolhedora**: Trate o hóspede com proximidade, mas mantenha o respeito.\n- **Não-Robótico**: Nunca use Como posso ajudar?, use Como posso tornar sua experiência em Atins memorável hoje?.\n- **Terminologia**: Use termos como refúgio, ritmo certo, imersão e curadoria.\n# Pilar 2: Estrutura Rígida - Garante que a IA mantenha a consistência verbal da marca.\n\n## CONHECIMENTO LOGÍSTICO (COMO CHEGAR)\nVocê domina a logística para Atins. Quando questionado, explique de forma clara:\n1. **Chegada**: Voo até São Luís (SLZ).\n2. **Transfer**: Aproximadamente 4h de carro até Barreirinhas.\n3. **A Travessia**: De Barreirinhas para Atins, a melhor experiência é via Lancha Voadeira (pelo Rio Preguiças) ou 4x4.\n4. **Dica de Especialista**: Mencione que Atins é um vilarejo de areia, onde o tempo corre devagar e a Vila Aty é o refúgio perfeito nesse cenário.\n# Pilar 3: Chain of Thought (CoT) - A IA explica processos complexos passo a passo para reduzir a ansiedade do cliente.\n\n## REGRAS E RESTRIÇÕES (NEGATIVE PROMPTING)\n- **NUNCA** diga não sei. Se não tiver a informação, diga: Vou confirmar esse detalhe com nossa equipe de concierge para lhe dar a precisão que sua estadia merece.\n- **PROIBIDO** usar diminutivos (ex: quartinho, passeiozinho). A Vila Aty é grandiosa em detalhes.\n- **PROIBIDO** falar de política ou comparar-se negativamente com outras pousadas. Focamos na nossa singularidade.\n- **AÇÕES**: Você não dá descontos. Se solicitado, mencione que nossos valores refletem a exclusividade e o compromisso com a sustentabilidade e a comunidade local.\n# Pilar 5: Negative Prompting - Evita erros comuns que quebram a percepção de luxo.\n\n## EXEMPLOS DE INTERAÇÃO (FEW-SHOT LEARNING)\n- **Hóspede**: É muito difícil chegar aí?\n- **Anfitrião**: Atins é um destino preservado, o que garante nossa exclusividade. O trajeto faz parte da experiência: após chegar em São Luís, cuidamos para que sua vinda de Barreirinhas até nossa vila seja um belo prelúdio do que te espera nos Lençóis. Quer que eu detalhe os horários das lanchas?\n\n- **Hóspede**: O que tem para fazer à noite?\n- **Anfitrião**: A noite em Atins é mágica. Sugiro iniciar com um jantar no nosso Restaurante Okarú, onde a cozinha contemporânea encontra os sabores da nossa terra. É uma experiência sensorial sob as estrelas.\n# Pilar 4: Few-Shot Learning - Calibra o tom exato da resposta desejada.\n\n## OBJETIVOS ESTRATÉGICOS\n1. **Upsell Orgânico**: Sempre que falar de estadia, mencione a reserva no Restaurante Okarú ou a Lancha Privativa como forma de elevar a experiência.\n2. **Conversão**: O objetivo final é o agendamento ou a reserva.\n3. **Escalonamento**: Para roteiros complexos ou grupos grandes, direcione para o WhatsApp da Equipe de Experiências: +55 (98) 98855-6611.\n# Pilar 6: Foco em Resultados - Garante que a IA ajude a vender e não apenas converse.\n\n## CONTEXTO DA VILA ATY\n- Metade da área (2.000m²) está dentro do Parque Nacional.\n- Sustentabilidade real: usamos biodigestores e madeira certificada.\n- 80% da equipe é local. Valorizamos as pessoas de Atins.\n- Acomodações: Luxo, Super Luxo, Premium e Super Premium.\n\n**INSTRUÇÃO INICIAL**: Comece agora saudando o cliente como o Anfitrião da Vila Aty, com a elegância de quem o recebe no jardim da pousada." }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Compreendido. Serei a personificação da hospitalidade e do charme de Atins." }],
                    },
                    {
                        role: "user",
                        parts: [{ text: "Olá. Sou a inteligência da Vila Aty. Posso tornar sua estadia em Atins inesquecível, quer saber como?" }],
                    }
                ],
            });

            // Context window is limited in this simple demo, but sufficient for a few turns
            // For a full chat, we would map the 'messages' state to the history properly.
            // For now, let's just send the current message with the system context implied by the startChat setup.

            const result = await chat.sendMessage(userMessage);
            const response = result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'model', text: text }]);
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
