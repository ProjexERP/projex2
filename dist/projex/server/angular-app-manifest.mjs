
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
    'index.csr.html': {size: 12567, hash: '9e78d74ad64bd32e8e188fe973f59802213122caa2ba98f212ddd46706a6b863', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1139, hash: '76e8042fbbe3b8aed81677978d6a9217cf6e9b2123828014f5526f4a5666a967', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 171262, hash: '965061dfea4a28c4ef8c310c3ebf76ce5b96c5182186b08a65a2fde651500bc6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'payroll/index/index.html': {size: 189300, hash: 'fe709d79ab3d78229254be5edda03a368fa89dd4899f08844293f550c2979780', text: () => import('./assets-chunks/payroll_index_index_html.mjs').then(m => m.default)},
    'product/prodandplan/index.html': {size: 114079, hash: 'db0aa40605fb2174fef33d0d6773df0e3ac3582721bec01c549d231fbd39077d', text: () => import('./assets-chunks/product_prodandplan_index_html.mjs').then(m => m.default)},
    'product/Planandpricing/index.html': {size: 174725, hash: 'c30f190a1b6d74340f8f89bebc6b1b6e51fe7b5a523583cc99ced94a300639fa', text: () => import('./assets-chunks/product_Planandpricing_index_html.mjs').then(m => m.default)},
    'hrm/index.html': {size: 96145, hash: 'e9dfec839766fc8030df5ed4f25f2f196051fb4f7456a6b8971d681c9d2aa9ec', text: () => import('./assets-chunks/hrm_index_html.mjs').then(m => m.default)},
    'manage-account/index.html': {size: 95981, hash: 'fdc06b8ef10f42e1d8518d16d6e4eb25e7a94261609b2e80eb6738b7c4f1f241', text: () => import('./assets-chunks/manage-account_index_html.mjs').then(m => m.default)},
    'sale-order-management/index.html': {size: 85848, hash: 'ac0803af88b091c6564670b93c8db8deb4deea231df70a37a7a3a181e36c4ee3', text: () => import('./assets-chunks/sale-order-management_index_html.mjs').then(m => m.default)},
    'contactUs/index.html': {size: 85251, hash: 'faa352faba6edd176c8108e5931642b50b9fa84d7b999eb88f48209feaa02d94', text: () => import('./assets-chunks/contactUs_index_html.mjs').then(m => m.default)},
    'inventory-control-management/index.html': {size: 84882, hash: '596369207c12657ccff074375a1935d96b7de63857662f78d09a4601a3da71ed', text: () => import('./assets-chunks/inventory-control-management_index_html.mjs').then(m => m.default)},
    'styles-4E3EC4UF.css': {size: 181255, hash: 'DSJ80i83ygE', text: () => import('./assets-chunks/styles-4E3EC4UF_css.mjs').then(m => m.default)}
  },
};
