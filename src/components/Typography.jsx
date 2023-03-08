import React from 'react';

export function Typography({ variant = 'p_xl', styles = '', value = '' } = {}) {
  const typographyVariant = {
    h1: 'font-display text-5xl tracking-tight sm:text-6xl md:text-7xl',
    h2: 'font-display text-4xl tracking-tight sm:text-5xl',
    h3: 'font-display text-3xl tracking-tight sm:text-4xl',
    h4: 'font-display text-2xl tracking-tight sm:text-3xl',
    h5: 'font-display text-xl tracking-tight sm:text-2xl',
    h6: 'font-display text-lg tracking-tight sm:text-xl',
    p_xl: 'text-xl tracking-tight',
    p_lg: 'text-lg tracking-tight',
    p_base: 'text-base tracking-tight',
    p_sm: 'text-sm tracking-tight',
    p_xs: 'text-xs tracking-tight',
    span_xl: 'text-xl tracking-tight',
    span_lg: 'text-lg tracking-tight',
    span_base: 'text-base tracking-tight',
    span_sm: 'text-sm tracking-tight',
    span_xs: 'text-xs tracking-tight',
  };
  if (variant === 'h1') {
    return (
      <h1 className={`${styles} ${typographyVariant[variant]} `}>{value}</h1>
    );
  }
  if (variant === 'h2') {
    return (
      <h2 className={`${styles} ${typographyVariant[variant]}`}>{value}</h2>
    );
  }
  if (variant === 'h3') {
    return (
      <h3 className={`${styles} ${typographyVariant[variant]}`}>{value}</h3>
    );
  }
  if (variant === 'h4') {
    return (
      <h4 className={`${styles} ${typographyVariant[variant]}`}>{value}</h4>
    );
  }
  if (variant === 'h5') {
    return (
      <h5 className={`${styles} ${typographyVariant[variant]}`}>{value}</h5>
    );
  }
  if (variant === 'h6') {
    return (
      <h6 className={`${styles} ${typographyVariant[variant]}`}>{value}</h6>
    );
  }
  if (
    variant === 'p_xl' ||
    variant === 'p_lg' ||
    variant === 'p_base' ||
    variant === 'p_sm' ||
    variant === 'p_xs'
  ) {
    return <p className={`${styles} ${typographyVariant[variant]}`}>{value}</p>;
  }
  if (
    variant === 'span_xl' ||
    variant === 'span_lg' ||
    variant === 'span_base' ||
    variant === 'span_sm' ||
    variant === 'span_xs'
  ) {
    return (
      <span className={`${styles} ${typographyVariant[variant]}`}>{value}</span>
    );
  }
}
