import React from 'react';

const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'why-us', label: 'Manifesto & Valores' },
    { id: 'comparison', label: 'Humano vs IA' },
    { id: 'expeditions', label: 'Aty Expedições' },
    { id: 'crm', label: 'CRM & Controle' },
    { id: 'roi', label: 'Impacto & ROI' },
    { id: 'cta', label: 'Próximos Passos' }
];

const Navigation = ({ activeId }) => {
    return (
        <nav style={{
            position: 'fixed',
            right: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center'
        }}>
            {sections.map(section => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="nav-dot"
                    title={section.label}
                    style={{
                        width: activeId === section.id ? '28px' : '10px', // Larger for logo
                        height: activeId === section.id ? '28px' : '10px',
                        borderRadius: '50%',
                        backgroundColor: activeId === section.id ? 'transparent' : 'transparent', // Transparent for logo
                        border: activeId === section.id ? 'none' : '2px solid rgba(255,255,255,0.3)', // No border for logo
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        boxShadow: 'none', // Shadow handled by drop-shadow on img
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {activeId === section.id ? (
                        <img
                            src="/logo-reduzida.png"
                            alt="Active"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 0 5px var(--accent-glow))'
                            }}
                        />
                    ) : null}
                </a>
            ))}

            {/* Vertical Line behind dots (optional visual) */}
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: -1
            }} />
        </nav>
    );
};

export default Navigation;
