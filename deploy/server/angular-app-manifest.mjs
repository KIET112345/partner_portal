
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/partner-portal-page/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-2Q3PIFA4.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 935, hash: '0250599ab68e48c540ba8a2b89f3900f08b9ddbd29c7978b01a5e02bbbf8b0d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1085, hash: '6dafce106723aa33c796713815aa0f1445427d9869d531a80e929d2637e80664', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JNR2H2Q5.css': {size: 13298, hash: 'Y9rBgLCQGrM', text: () => import('./assets-chunks/styles-JNR2H2Q5_css.mjs').then(m => m.default)}
  },
};
