'use client';
import React, { useEffect } from 'react';
import config from '../../config';

function NextSeo({ title, description, path, metaImage }) {
    useEffect(() => {
        document.title = title;

        const metaTags = [
            { name: 'description', content: description },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'robots', content: 'index, follow' },
            { property: 'og:locale', content: 'en_US' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: `${config.mainWebUrl}${path}` },
            { property: 'og:site_name', content: title },
            { property: 'og:image', content: metaImage },
            { name: 'twitter:card', content: 'summary_large_image' }
        ];

        metaTags.forEach(tag => {
            const meta = document.createElement('meta');
            Object.keys(tag).forEach(key => meta.setAttribute(key, tag[key]));
            document.head.appendChild(meta);
        });

        const linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        linkCanonical.setAttribute('href', `${config.mainWebUrl}${path}`);
        document.head.appendChild(linkCanonical);

        const favicon = document.createElement('link');
        favicon.setAttribute('rel', 'icon');
        favicon.setAttribute('href', '/images/cac_favicon-150x150.png');
        document.head.appendChild(favicon);

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "ivistaz",
            "url": `${config.mainWebUrl}${path}`,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${config.mainWebUrl}${path}/{search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        });
        document.head.appendChild(script);

        // Optional cleanup
        return () => {
            document.head.removeChild(script);
            document.head.removeChild(favicon);
            document.head.removeChild(linkCanonical);
            metaTags.forEach(tag => {
                const selector = tag.name
                    ? `meta[name="${tag.name}"]`
                    : `meta[property="${tag.property}"]`;
                const el = document.head.querySelector(selector);
                if (el) document.head.removeChild(el);
            });
        };
    }, [title, description, path, metaImage]);

    return null; // No JSX output needed
}

export default NextSeo;
