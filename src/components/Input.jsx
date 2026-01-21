import React from 'react';

export const Input = ({ label, id, error, ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
            {label && (
                <label
                    htmlFor={id}
                    style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-bg-surface)',
                    backgroundColor: 'white',
                    color: 'var(--color-text-primary)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)'
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-primary)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = error ? 'var(--color-error)' : 'var(--color-bg-surface)';
                    e.target.style.boxShadow = 'none';
                }}
                {...props}
            />
            {error && (
                <span style={{ fontSize: '0.75rem', color: 'var(--color-error)' }}>
                    {error}
                </span>
            )}
        </div>
    );
};
