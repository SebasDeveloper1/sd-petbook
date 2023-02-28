import React from 'react';

export function Typography({ variant = 'p_xl', styles = '', value = '' } = {}) {
  const typographyVariant = {
    h1: 'font-display font-medium text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl',
    h2: 'font-display font-medium text-4xl tracking-tight sm:text-5xl',
    h3: 'font-display font-medium text-3xl tracking-tight sm:text-4xl',
    h4: 'font-display font-medium text-2xl tracking-tight sm:text-3xl',
    h5: 'font-display font-medium text-xl tracking-tight sm:text-2xl',
    h6: 'font-display font-medium text-lg tracking-tight sm:text-xl',
    p_xl: 'text-xl font-medium tracking-tight',
    p_lg: 'text-lg font-medium tracking-tight',
    p_base: 'text-base font-medium tracking-tight',
    p_sm: 'text-sm font-medium tracking-tight',
    p_xs: 'text-xs font-medium tracking-tight',
    span_xl: 'text-xl font-medium tracking-tight',
    span_lg: 'text-lg font-medium tracking-tight',
    span_base: 'text-base font-medium tracking-tight',
    span_sm: 'text-sm font-medium tracking-tight',
    span_xs: 'text-xs font-medium tracking-tight',
  };
  if (variant === 'h1') {
    return (
      <h1 className={`${typographyVariant[variant]} ${styles}`}>{value}</h1>
    );
  }
  if (variant === 'h2') {
    return (
      <h2 className={`${typographyVariant[variant]} ${styles}`}>{value}</h2>
    );
  }
  if (variant === 'h3') {
    return (
      <h3 className={`${typographyVariant[variant]} ${styles}`}>{value}</h3>
    );
  }
  if (variant === 'h4') {
    return (
      <h4 className={`${typographyVariant[variant]} ${styles}`}>{value}</h4>
    );
  }
  if (variant === 'h5') {
    return (
      <h5 className={`${typographyVariant[variant]} ${styles}`}>{value}</h5>
    );
  }
  if (variant === 'h6') {
    return (
      <h6 className={`${typographyVariant[variant]} ${styles}`}>{value}</h6>
    );
  }
  if (
    variant === 'p_xl' ||
    variant === 'p_lg' ||
    variant === 'p_base' ||
    variant === 'p_sm' ||
    variant === 'p_xs'
  ) {
    return <p className={`${typographyVariant[variant]} ${styles}`}>{value}</p>;
  }
  if (
    variant === 'span_xl' ||
    variant === 'span_lg' ||
    variant === 'span_base' ||
    variant === 'span_sm' ||
    variant === 'span_xs'
  ) {
    return (
      <span className={`${typographyVariant[variant]} ${styles}`}>{value}</span>
    );
  }
}
