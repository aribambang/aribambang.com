import { SEO_TITLE, SEO_DESCRIPTION } from './constants';
import { DefaultSeoProps } from 'next-seo';

const SEOConfig: DefaultSeoProps = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  canonical: 'https://aribambang.com',
  twitter: {
    handle: '@aribambangg',
    site: '@aribambangg',
    cardType: 'summary_large_image',
  },
};

export default SEOConfig;
