import React from 'react';

export const Button = ({ children, variant = 'primary', size = 'md', className = '', style = {}, ...props }) => {

    const getVariantStyle = () => {
        switch (variant) {
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)'
                };
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-secondary)'
                };
            case 'primary':
            default:
                return {
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    border: '1px solid var(--color-primary)'
                };
        }
    };

    const getSizeStyle = () => {
        switch (size) {
            case 'sm': return { padding: '0.25rem 0.5rem', fontSize: '0.8rem' };
            case 'lg': return { padding: '0.75rem 1.5rem', fontSize: '1.1rem' };
            case 'md':
            default: return { padding: '0.5rem 1rem', fontSize: '1rem' };
        }
    };

    return (
        <button
            className={`btn ${className}`}
            style={{
                borderRadius: 'var(--radius-sm)', // Shark/Retail feel
                fontWeight: 600,
                cursor: 'pointer',
                opacity: props.disabled ? 0.6 : 1,
                pointerEvents: props.disabled ? 'none' : 'auto',
                ...getVariantStyle(),
                ...getSizeStyle(),
                ...style // Allow overrides
            }}
            {...props}
        >
            {children}
        </button>
    );
};
