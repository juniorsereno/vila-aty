import React from 'react';
import Section from '../components/Section';

const ROI = () => {
    const stats = [
        { value: '+25%', label: 'Mais experiências vividas', sub: 'Upsell natural de passeios' },
        { value: '24/7', label: 'Disponibilidade', sub: 'Para sonhar junto com o hóspede' },
        { value: '0', label: 'Esforço Extra', sub: 'Integração total com seu sistema' },
        { value: '∞', label: 'Memórias', sub: 'O verdadeiro ROI da hospitalidade' }
    ];

    return (
        <Section id="roi" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/vila-aty/foto-vila-aty-super-luxo.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
                mixBlendMode: 'luminosity',
                zIndex: -1
            }} />
            <div style={{ textAlign: 'center', width: '100%', position: 'relative', zIndex: 1 }}>

                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 300 }}>
                    O valor do <span className="text-gradient" style={{ fontFamily: 'serif', fontStyle: 'italic' }}>invisível.</span>
                </h2>

                <p style={{ fontSize: '1.2rem', marginBottom: '5rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto 5rem auto' }}>
                    Investir em tecnologia não é sobre cortar custos. É sobre expandir a capacidade da Vila Aty de gerar momentos inesquecíveis.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '3rem 1.5rem',
                            textAlign: 'center',
                            border: index === 3 ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)'
                        }}>
                            <div style={{
                                fontSize: '3.5rem',
                                fontWeight: 300,
                                color: index === 3 ? 'var(--accent-primary)' : '#fff',
                                marginBottom: '1rem',
                            }}>
                                {stat.value}
                            </div>
                            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{stat.label}</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.6, fontStyle: 'italic' }}>{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ROI;
