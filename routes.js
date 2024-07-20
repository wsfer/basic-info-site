const routes = new Map([
  ['/', { fileName: 'index.html', contentType: 'text/html' }],
  ['/about', { fileName: 'about.html', contentType: 'text/html' }],
  ['/contact-me', { fileName: 'contact-me.html', contentType: 'text/html' }],
  ['/favicon.ico', { fileName: 'favicon.ico', contentType: 'image/x-icon' }],
  ['/style.css', { fileName: 'style.css', contentType: 'text/css' }],
  ['/banner-image.jpg', { fileName: 'banner-image.jpg', contentType: 'image/jpeg' }],
  ['/lake-with-trees.jpg', { fileName: 'lake-with-trees.jpg', contentType: 'image/jpeg' }],
  ['/lavander-field.jpg', { fileName: 'lavander-field.jpg', contentType: 'image/jpg' }],
  ['/cat-jump.gif', { fileName: 'cat-jump.gif', contentType: 'image/gif' }]
]);

module.exports = routes;