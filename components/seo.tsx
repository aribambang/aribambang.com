import React from 'react';
import { NextSeo } from 'next-seo';
import { SEO_TITLE } from '../constants';

interface SEOProps {
  title: string;
}
const SEO = ({ title }: SEOProps) => {
  return <NextSeo title={title ? `${title} - ${SEO_TITLE}` : SEO_TITLE} />;
};

export default SEO;
