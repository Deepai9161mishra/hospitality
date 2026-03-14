import { Helmet } from 'react-helmet-async';
import { BRAND } from '../../constants/brand';

/**
 * SEO Component for managing page-specific meta tags
 */
const SEO = ({
  title = `${BRAND.name} - Multispeciality Hospital in ${BRAND.location}`,
  description = BRAND.description,
  keywords = `${BRAND.name}, hospital in ${BRAND.location}, multispeciality hospital, emergency care, ICU, dialysis, surgery, doctors in ${BRAND.location}`,
  canonicalUrl,
  ogImage = `${BRAND.siteUrl}/logo.png`,
  ogType = 'website',
  noIndex = false,
}) => {
  const fullTitle = title.includes(BRAND.name) ? title : `${title} | ${BRAND.name}`;
  const canonical = canonicalUrl || BRAND.siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BRAND.name} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
