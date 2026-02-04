import React from 'react';
import Section from '../components/Section';

const CTA = () => {
    return (
        <Section id="cta" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/vila-aty/vila-aty-foto-luxo.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
                mixBlendMode: 'soft-light',
                zIndex: -1
            }} />
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    Vamos Escalar?
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    3 Passos para transformar seu atendimento
                </p>

                {/* Timeline */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '5rem',
                    textAlign: 'left',
                    flexWrap: 'wrap'
                }}>
                    {[
                        { step: '1', title: 'Reunião', desc: '30 min de alinhamento' },
                        { step: '2', title: 'Piloto (72h)', desc: 'Bot de Vendas no WhatsApp' },
                        { step: '3', title: 'Resultado', desc: 'Métricas reais em 15 dias' }
                    ].map((item, i) => (
                        <div key={i} className="" style={{ flex: '1 1 200px' }}>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: 800,
                                color: 'var(--glass-border)',
                                lineHeight: 1
                            }}>{item.step}</div>
                            <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Card */}
                <div className="glass-card" style={{
                    padding: '3rem',
                    border: '1px solid var(--accent-secondary)',
                    boxShadow: '0 0 30px rgba(0, 255, 157, 0.1)'
                }}>

                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Fale com Junior Sereno</h3>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8 }}>CEO, Criativa + AI</p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:juniorsereno.br@gmail.com" className="btn" style={{ borderColor: '#fff', color: '#fff' }}>Email</a>
                        <a href="https://wa.me/5561981435045" className="btn" style={{ background: 'var(--accent-secondary)', color: '#000', borderColor: 'var(--accent-secondary)' }}>WhatsApp</a>
                    </div>
                </div>

                <p style={{ marginTop: '3rem', fontStyle: 'italic', opacity: 0.6 }}>
                    "Vamos transformar cada interação digital da Vila Aty em uma prévia da experiência inesquecível."
                </p>

            </div>
        </Section>
    );
};

export default CTA;
