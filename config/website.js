module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'Learning The Sword', // Navigation and Site Title
  _titleAlt: 'Learning The Sword', // Title for JSONLD
  description: 'A historical arms blog for Will Weaver, known in the SCA as Lord Erich Guter Muth.',
  _url: 'https://www.learningthesword.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo.jpg', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'LearnSword', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Will Weaver',
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@erichgutermuth', // Twitter Username
};
