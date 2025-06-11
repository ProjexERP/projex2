
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/projex/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/projex"
  },
  {
    "renderMode": 2,
    "route": "/projex/payroll/index"
  },
  {
    "renderMode": 2,
    "route": "/projex/product/prodandplan"
  },
  {
    "renderMode": 2,
    "route": "/projex/product/Planandpricing"
  },
  {
    "renderMode": 2,
    "route": "/projex/manage-account"
  },
  {
    "renderMode": 2,
    "route": "/projex/hrm"
  },
  {
    "renderMode": 2,
    "route": "/projex/sale-order-management"
  },
  {
    "renderMode": 2,
    "route": "/projex/inventory-control-management"
  },
  {
    "renderMode": 2,
    "route": "/projex/contactUs"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12567, hash: '82fa01a659cd2b8e340b790d1462e473184fc28791431a940386bc078904a9f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1139, hash: 'b18b87d971326cdf4904001d212b0af1194a4c1f2f55e43676b37a5744d1ff64', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'payroll/index/index.html': {size: 189300, hash: '5ce767507b19380bb9de7ac3157681798dda3c00a00558cb56e4050bdbf1622d', text: () => import('./assets-chunks/payroll_index_index_html.mjs').then(m => m.default)},
    'index.html': {size: 171262, hash: 'abfdc1ec2bcd3b29ddc49a2b556b70e0f75fdb0512269c67d13e9ba61ff936de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'product/prodandplan/index.html': {size: 114079, hash: '58d57d203bc6d0aaf8c8f7555ffca1e25ca5d65e3671903efc02ad2a5322b21f', text: () => import('./assets-chunks/product_prodandplan_index_html.mjs').then(m => m.default)},
    'manage-account/index.html': {size: 95981, hash: '605d95c2650120e8b331a85b16e2bdc127d4cbf8522cac656e4113f1e1c034c8', text: () => import('./assets-chunks/manage-account_index_html.mjs').then(m => m.default)},
    'product/Planandpricing/index.html': {size: 174725, hash: 'c4c96f9e793b973ff767fde9ffd761b382acaa10724cff0b5a25638b84e0b35a', text: () => import('./assets-chunks/product_Planandpricing_index_html.mjs').then(m => m.default)},
    'hrm/index.html': {size: 96145, hash: '46b4b294f563901e5bb9bc10a5eaf905cf76d004bd46e48bd7e38ee7f512952b', text: () => import('./assets-chunks/hrm_index_html.mjs').then(m => m.default)},
    'sale-order-management/index.html': {size: 85848, hash: '1b74499a3eeb155055e9cb9637e8e97dfa9c670ef6db4b72c47c5d04e78512d2', text: () => import('./assets-chunks/sale-order-management_index_html.mjs').then(m => m.default)},
    'inventory-control-management/index.html': {size: 84882, hash: '2c341f29f68883283adc7d5adc910873ac203bf600a71f21a891baa0ab4e6ad1', text: () => import('./assets-chunks/inventory-control-management_index_html.mjs').then(m => m.default)},
    'contactUs/index.html': {size: 85251, hash: '04e6b81259b2abe987ed0807606841c1a7059c4e476f1096ddc872ed92623ceb', text: () => import('./assets-chunks/contactUs_index_html.mjs').then(m => m.default)},
    'styles-4E3EC4UF.css': {size: 181255, hash: 'DSJ80i83ygE', text: () => import('./assets-chunks/styles-4E3EC4UF_css.mjs').then(m => m.default)}
  },
};
