import React from 'react';
import Section from '../components/Section';

const CRM = () => {
    return (
        <Section id="crm">
            <div className="grid-2-col" style={{ gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr' }}>

                {/* Left: Copy */}
                <div>
                    <div style={{
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontSize: '0.8rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-primary)',
                        borderBottom: '1px solid var(--accent-primary)',
                        paddingBottom: '5px'
                    }}>
                        Gestão & Controle
                    </div>

                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        O Retrato do Seu <br />
                        <span className="text-gradient">Negócio.</span>
                    </h2>

                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8, lineHeight: 1.6 }}>
                        Não entregamos apenas conversas; entregamos inteligência. Nosso CRM personalizado centraliza todos os contatos em um único painel visual.
                    </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                        {[
                            'Omnichannel: WhatsApp, Instagram e Site.',
                            'Triagem Automática: Leads quentes vs. Curiosos.',
                            'Métricas em Tempo Real: Conversão e Faturamento.',
                            'Intervenção Humana: Assuma a conversa quando quiser.'
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.9 }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Dashboard Mock */}
                <div className="glass-card crm-dashboard-mock" style={{
                    padding: '2rem',
                    background: 'rgba(15, 34, 30, 0.6)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    position: 'relative',
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    boxShadow: '20px 20px 60px rgba(0,0,0,0.4)',
                    transition: 'transform 0.5s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg)'}
                >
                    {/* Header Mock */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Dashboard Vila Aty</div>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', opacity: 0.7 }}>
                            <span>Hoje</span>
                            <span style={{ color: 'var(--accent-primary)' }}>▼</span>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.5rem' }}>Faturamento (Reservas)</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--accent-primary)' }}>R$ 42.500</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)', marginTop: '0.2rem' }}>+12% vs. ontem</div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.5rem' }}>Conversão (IA)</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>18.4%</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--accent-secondary)', marginTop: '0.2rem' }}>24 vendas fechadas</div>
                        </div>
                    </div>

                    {/* List Mock */}
                    <div>
                        <div style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '1rem', letterSpacing: '0.1em' }}>ÚLTIMOS ATENDIMENTOS</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {[
                                { name: 'Ricardo S.', status: 'Reserva Confirmada', value: 'R$ 3.800', time: '2 min' },
                                { name: 'Mariana L.', status: 'Cotando Estadia', value: 'R$ 5.450', time: '5 min' },
                                { name: 'João P.', status: 'Aguardando Pagamento', value: 'R$ 2.200', time: '12 min' },
                            ].map((lead, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '0.8rem',
                                    background: 'rgba(0,0,0,0.2)',
                                    borderRadius: '6px',
                                    fontSize: '0.8rem'
                                }}>
                                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? 'var(--accent-secondary)' : '#FCD34D' }}></div>
                                        <span>{lead.name}</span>
                                    </div>
                                    <div style={{ opacity: 0.6 }}>{lead.status}</div>
                                    <div style={{ fontWeight: 600 }}>{lead.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default CRM;
