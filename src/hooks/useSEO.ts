import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string;
  schema?: object;
}

export function useSEO({
  title,
  description,
  image = '/og-default.jpg',
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords,
  schema,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = `${title} | TecGeo - Regularização de Propriedades Rurais`;

    // Meta tags básicas
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:site_name', 'TecGeo', 'property');

    // Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', image, 'name');

    // Article specific
    if (type === 'article' && publishedTime) {
      updateMetaTag('article:published_time', publishedTime, 'property');
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, 'property');
      }
      if (author) {
        updateMetaTag('article:author', author, 'property');
      }
    }

    // Canonical URL
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;

    // Schema
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, image, url, type, publishedTime, modifiedTime, author, keywords, schema]);
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function generateArticleSchema(article: {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  id: string;
}) {
  const url = `https://www.tecgeo.com.br/noticias/${article.id}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'TecGeo',
      url: 'https://www.tecgeo.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TecGeo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.tecgeo.com.br/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}