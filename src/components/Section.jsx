import React, { useEffect, useRef, useState } from 'react';

const Section = ({ id, className = '', children, background = 'transparent' }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden ${className}`}
            style={{
                background: background,
                minHeight: '100vh',
                padding: 'var(--section-padding)',
                position: 'relative',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
        >
            {/* Background/Glow Effects Container */}
            <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
                {/* We can inject bg effects here later */}
            </div>

            <div className="container relative z-10 w-full">
                {children}
            </div>
        </section>
    );
};

export default Section;
