export const environment = {
  baseUrl: import.meta.env['VITE_BASE_URL'],
  production: import.meta.env['VITE_PRODUCTION'] === 'true',
  apiUrl: import.meta.env['VITE_API_URL'],
  websiteUrl: import.meta.env['VITE_WEBSITE_URL'],

  // baseUrl: 'http://localhost:4200',
  // production: 'http://localhost:4200',
  // apiUrl: 'http://localhost:4200',
  // websiteUrl: 'http://localhost:4200'
};
