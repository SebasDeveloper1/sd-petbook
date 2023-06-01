import React from 'react';
import { Helmet } from 'react-helmet';

export function MetaHead({ title, description, name, type, url }) {
  return (
    <Helmet>
      <meta name="apple-mobile-web-app-title" content="petbook.com" />
      <meta name="application-name" content="petbook.com" />
      <meta name="theme-color" content="#0f172a" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href={url} />
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
