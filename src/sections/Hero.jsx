import React from 'react';
import Section from '../components/Section';

const Hero = () => {
    return (
        <Section id="hero" className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/vila-aty/foto-vila-aty-super-premium.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.1,
                mixBlendMode: 'overlay',
                zIndex: -1
            }} />
            <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Decorative Element */}
                <div style={{
                    width: '1px',
                    height: '60px',
                    background: 'linear-gradient(to bottom, transparent, var(--accent-primary))',
                    margin: '0 auto 2rem auto'
                }} />

                {/* Badge/Date */}
                <div style={{
                    display: 'inline-block',
                    marginBottom: '2rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)'
                }}>
                    Uma Proposta para Vila Aty
                </div>

                {/* Main Title - Emotional & Story Driven */}
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    lineHeight: 1.1,
                    marginBottom: '2.5rem',
                    fontWeight: 300
                }}>
                    O luxo da <span style={{ fontFamily: 'serif', fontStyle: 'italic', color: 'var(--accent-primary)' }}>memória</span><br />
                    começa na primeira mensagem.
                </h1>

                {/* Subtitle - Evocative */}
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: 1.8,
                    fontWeight: 300
                }}>
                    A Vila Aty oferece mais que quartos. Oferece reconexão. <br />
                    Nossa tecnologia garante que essa experiência comece antes do check-in, <br />
                    tratando cada hóspede pelo nome, antecipando desejos e vendendo experiências.
                </p>

                {/* CTA Button */}
                <a href="#why-us" className="btn">
                    Descubra como
                </a>

                {/* Stats/Highlight or small grid below */}
                <div style={{
                    marginTop: '6rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '3rem'
                }}>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '0.1em' }}>EXPERIÊNCIA</p>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginTop: '0.5rem' }}>Personalizada</h3>
                    </div>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                        <p style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '0.1em' }}>DISPONIBILIDADE</p>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginTop: '0.5rem' }}>Eterna</h3>
                    </div>
                    <div>
                        <p style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '0.1em' }}>ALMA</p>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginTop: '0.5rem' }}>Humana</h3>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Hero;
