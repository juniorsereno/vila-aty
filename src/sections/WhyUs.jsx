import React from 'react';
import Section from '../components/Section';

const WhyUs = () => {
    return (
        <Section id="why-us">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                {/* Left Side: Emotional Manifesto */}
                <div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                        Uma carta aberta à <span className="text-gradient">Vila Aty.</span>
                    </h2>
                    <div style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'var(--text-secondary)',
                        borderLeft: '1px solid var(--accent-primary)',
                        paddingLeft: '2rem',
                        fontStyle: 'italic'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            "O que faz um hóspede voltar não é apenas a cama macia ou a beleza de Atins. É a sensação de ter sido <strong>esperado</strong>."
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Na Criativa + AI, não construímos robôs. Construímos guardiões da sua marca. Entendemos que seu time humano é finito e precisa focar no 'bom dia' ao vivo.
                        </p>
                        <p>
                            Por isso, quero ser seu parceiro tecnológico para cuidar de tudo o que acontece antes do abraço de chegada.
                        </p>
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img
                            src="/sereno-foto.jpg"
                            alt="Junior Sereno"
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '2px solid var(--accent-primary)'
                            }}
                        />
                        <div>
                            <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Junior Sereno</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>CEO, Criativa + AI</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Value Props (Subtle) */}
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                        { title: 'Sua Alma', desc: 'Treinamento exclusivo com sua história.' },
                        { title: 'Segurança', desc: 'Infraestrutura Google for Startups.' },
                        { title: 'Google Partner', desc: 'Credibilidade global.' }
                    ].map((item, i) => (
                        <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}>✦</div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default WhyUs;
