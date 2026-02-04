import React from 'react';
import Section from '../components/Section';

const Expeditions = () => {
    return (
        <Section id="expeditions">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Left Side: Copy */}
                <div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        A Joia da Coroa: <br />
                        <span className="text-gradient">Aty Expedições</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.8 }}>
                        Suas experiências são complexas e de alto valor. Elas precisam de um vendedor especializado disponível 24h para fechar a venda no momento da emoção.
                    </p>

                    <div style={{
                        marginBottom: '2rem',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        border: '1px solid var(--glass-border)'
                    }}>
                        <img
                            src="/vila-aty/foto-vila-aty-premium.jpg"
                            alt="Experiência Vila Aty"
                            style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                        />
                    </div>

                    <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-secondary)' }}>
                        <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>O Cenário Comum</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                            Hóspede vê "Piquenique no Pôr do Sol" no Instagram às 22h. Manda DM. Ninguém responde.
                            <br /><strong>Resultado: Venda perdida.</strong>
                        </p>
                    </div>
                </div>

                {/* Right Side: Chat Mock */}
                <div className="glass-card" style={{
                    padding: '0',
                    overflow: 'hidden',
                    maxWidth: '400px',
                    margin: '0 auto',
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    {/* Mock Header */}
                    <div style={{
                        padding: '1rem',
                        background: 'var(--bg-secondary)',
                        borderBottom: '1px solid var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        position: 'relative',
                        zIndex: 10
                    }}>
                        <div style={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            background: '#B4941F',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5px'
                        }}>
                            <img
                                src="https://vilaaty.com.br/wp-content/uploads/2020/06/Page-11.svg"
                                alt="Vila Aty"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'brightness(0) invert(1)' // White icon
                                }}
                            />
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Vila Aty (IA)</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--accent-primary)' }}>Online agora</div>
                        </div>
                    </div>

                    {/* Mock Messages */}
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '400px', justifyContent: 'flex-end' }}>

                        {/* User Message */}
                        <div style={{ alignSelf: 'flex-end', background: 'var(--glass-border)', padding: '0.8rem 1rem', borderRadius: '15px 15px 0 15px' }}>
                            <p style={{ fontSize: '0.8rem' }}>Quanto custa o Piquenique para 2 em julho?</p>
                        </div>

                        {/* AI Message */}
                        <div style={{ alignSelf: 'flex-start', background: 'rgba(0, 243, 255, 0.1)', border: '1px solid var(--accent-primary)', padding: '0.8rem 1rem', borderRadius: '15px 15px 15px 0' }}>
                            <p style={{ fontSize: '0.8rem' }}>
                                Olá! Que experiência mágica! ✨<br /><br />
                                O piquenique no pôr do sol para 2 pessoas em julho fica em <strong>R$ 500</strong>. Inclui traslado, cesta gourmet e espumante.<br /><br />
                                A disponibilidade está ótima! Quer reservar agora?
                            </p>
                        </div>

                        {/* User Message */}
                        <div style={{ alignSelf: 'flex-end', background: 'var(--glass-border)', padding: '0.8rem 1rem', borderRadius: '15px 15px 0 15px' }}>
                            <p style={{ fontSize: '0.8rem' }}>Sim, por favor!</p>
                        </div>

                        {/* AI Message */}
                        <div style={{ alignSelf: 'flex-start', background: 'rgba(0, 243, 255, 0.1)', border: '1px solid var(--accent-primary)', padding: '0.8rem 1rem', borderRadius: '15px 15px 15px 0' }}>
                            <p style={{ fontSize: '0.8rem' }}>
                                Perfeito! Aqui está o link para pagamento seguro... 💳
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Expeditions;
