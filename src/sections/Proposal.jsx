import React from 'react';
import Section from '../components/Section';

const Proposal = () => {
    return (
        <Section id="proposal">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Investimento & <span className="text-gradient">Parceria</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Tecnologia de ponta com modelo de negócio flexível. Transparência total para uma parceria de longo prazo.
                    </p>
                </div>

                {/* Implementation Fee */}
                <div className="glass-card" style={{
                    marginBottom: '4rem',
                    borderLeft: '4px solid var(--accent-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Taxa de Implantação (Setup)</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Configuração inicial, treinamento da IA, integração de canais e setup do ambiente.</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--accent-primary)' }}>R$ 3.000</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Pagamento Único</div>
                        </div>
                    </div>
                </div>

                {/* Monthly Plans */}
                <div className="grid-2-col" style={{ alignItems: 'stretch', gap: '2rem', marginBottom: '4rem' }}>

                    {/* Sales Plan */}
                    <div className="glass-card" style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        borderColor: 'rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Plano Vendas</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Foco total em conversão de reservas.</p>
                        </div>

                        <div style={{ fontSize: '2.5rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                            R$ 1.900<span style={{ fontSize: '1rem', fontWeight: '400', opacity: 0.7 }}>/mês</span>
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div><strong>Plataforma Omnichannel</strong> (Versão Padrão)</div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div><strong>1 Canal de Atendimento</strong></div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div>Agente IA especializado em Vendas</div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div>Tira-dúvidas sobre a pousada, experiências e passeios</div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div>Disponibilidade 24/7</div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', opacity: 0.5 }}>
                                <span>—</span>
                                <div>Sem Dashboard/CRM Personalizado</div>
                            </li>
                        </ul>
                    </div>

                    {/* Omnichannel Plan (Featured) */}
                    <div className="glass-card" style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid var(--accent-primary)',
                        transform: 'scale(1.02)',
                        boxShadow: '0 0 30px rgba(212, 175, 55, 0.1)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'var(--accent-primary)',
                            color: 'var(--bg-primary)',
                            padding: '0.2rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            letterSpacing: '0.05em'
                        }}>
                            RECOMENDADO
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Plano Gestão & CRM</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Gestão completa da jornada do hóspede com dados exclusívos.</p>
                        </div>

                        <div style={{ fontSize: '2.5rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2rem' }}>
                            R$ 3.000<span style={{ fontSize: '1rem', fontWeight: '400', opacity: 0.7 }}>/mês</span>
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-primary)' }}>✦</span>
                                <div><strong>Plataforma Omnichannel Completa</strong></div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-primary)' }}>✦</span>
                                <div><strong>Dashboard + CRM Sob Medida</strong> (Desenvolvido para Pousada)</div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div><strong>2 Canais de Atendimento</strong> (Interno e Externo)</div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div><strong>Canal Interno (Hóspedes):</strong> Tratamento de demandas, dúvidas, chamados, transfer, etc.</div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div><strong>Canal Externo (Vendas):</strong> Vendas de reservas, experiências, passeios.</div>
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>✓</span>
                                <div>Treinamento contínuo da IA</div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contract Rules */}
                <div style={{ marginTop: '4rem' }}>
                    <h4 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Termos da Parceria</h4>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {[
                            { title: 'Sem Fidelidade', desc: 'Liberdade total para contratar.' },
                            { title: 'Aviso Prévio', desc: 'Apenas 30 dias de antecedência.' },
                            { title: 'Suporte Humanizado', desc: 'Todos os dias, das 08h às 18h.' },
                            { title: 'Alinhamento Mensal', desc: 'Reuniões de melhoria contínua.' },
                            { title: 'Evolução Constante', desc: 'Desenvolvemos demandas extras sob medida.' }
                        ].map((item, i) => (
                            <div key={i} className="glass-card" style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderTop: '2px solid var(--accent-secondary)',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderBottom: 'none'
                            }}>
                                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h5>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Proposal;
