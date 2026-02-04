import React from 'react';
import Section from '../components/Section';

const Comparison = () => {
    return (
        <Section id="comparison">
            <div className="container" style={{ width: '100%' }}>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                        Para o seu time, <span className="text-gradient">suporte.</span><br />
                        Para o seu hóspede, <span className="text-gradient">magia.</span>
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
                        Não é sobre substituir pessoas. É sobre libertá-las para fazer o que só humanos podem fazer: encantar presencialmente.
                    </p>
                </div>

                <div className="grid-2-col responsive-grid" style={{ alignItems: 'stretch', gap: '2rem' }}>

                    {/* Card 1: The Human Challenge */}
                    <div className="glass-card" style={{ borderTop: '4px solid #555' }}>
                        <h3 style={{ marginBottom: '1.5rem', opacity: 0.7 }}>O Desafio Humano</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li>
                                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.3rem' }}>Disponibilidade Limitada</strong>
                                <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Humanos precisam dormir. Seus clientes da Europa ou da madrugada, não.</span>
                            </li>
                            <li>
                                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.3rem' }}>Sobrecarga Operacional</strong>
                                <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Responder "tem vaga?" 50x por dia drena a energia para atender quem já está lá.</span>
                            </li>
                            <li>
                                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.3rem' }}>Venda Reativa</strong>
                                <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Difícil lembrar de oferecer o "Piquenique" no momento certo da conversa.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2: The AI Solution */}
                    <div className="glass-card" style={{ borderTop: '4px solid var(--accent-primary)', background: 'linear-gradient(180deg, rgba(86, 194, 168, 0.05) 0%, rgba(0,0,0,0) 100%)' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>A Solução Criativa</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li>
                                <strong style={{ display: 'block', marginBottom: '0.3rem' }}>Onipresença (24/7)</strong>
                                <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Cada lead da madrugada é atendido com o mesmo calor de um "bom dia".</span>
                            </li>
                            <li>
                                <strong style={{ display: 'block', marginBottom: '0.3rem' }}>Inteligência de Vendas</strong>
                                <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Nossa IA sabe o cardápio, os passeios e sugere o complemento perfeito na hora certa.</span>
                            </li>
                            <li>
                                <strong style={{ display: 'block', marginBottom: '0.3rem' }}>Consistência Infinita</strong>
                                <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>O tom de voz da Vila Aty, preservado em cada vírgula, para sempre.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default Comparison;
