const routes = new Map([
  ['/', { fileName: 'index.html', contentType: 'text/html' }],
  ['/about', { fileName: 'about.html', contentType: 'text/html' }],
  ['/contact-me', { fileName: 'contact-me.html', contentType: 'text/html' }],
  ['/favicon.ico', { fileName: 'favicon.ico', contentType: 'image/x-icon' }],
  ['/style.css', { fileName: 'style.css', contentType: 'text/css' }],
]);

module.exports = routes;