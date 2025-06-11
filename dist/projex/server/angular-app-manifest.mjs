
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/projex/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/projex/index"
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
    'index.csr.html': {size: 12567, hash: '947c61aeb01d35e76897b4d427ae6ae44f327f7eccd2d7fc91a3f827067ccbd7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1139, hash: '191a6d9cd30546ba54ef40f53eaf3ee3bd6ccc4f42d9f643f99acbe76b868cf6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'product/prodandplan/index.html': {size: 114107, hash: 'ba8844e4306c72ca25755eb80d6533ef5c9da02bb67e852f2ff8a84b506d8b6c', text: () => import('./assets-chunks/product_prodandplan_index_html.mjs').then(m => m.default)},
    'payroll/index/index.html': {size: 189328, hash: 'be65603d1c62a54bd8aaeb5a0eea7be12412bde44b8d61abaf848f45b0b68ad5', text: () => import('./assets-chunks/payroll_index_index_html.mjs').then(m => m.default)},
    'manage-account/index.html': {size: 96009, hash: '57ce68a89dcdefb7544d15a8e2ccc5ebd2e819d99a3287b1a7f73a72ef88fde8', text: () => import('./assets-chunks/manage-account_index_html.mjs').then(m => m.default)},
    'product/Planandpricing/index.html': {size: 174753, hash: 'c7d917ce3b807cdbd6af79e651110d0a99735df67d838e28d69783384a482d69', text: () => import('./assets-chunks/product_Planandpricing_index_html.mjs').then(m => m.default)},
    'index/index.html': {size: 171290, hash: '55ba0bfdf2c3314d6789d074f49d9921b405ea6e64bd4519d6c43e6a579bc443', text: () => import('./assets-chunks/index_index_html.mjs').then(m => m.default)},
    'hrm/index.html': {size: 96173, hash: 'b5d83ee1fe8d0b0bd752d11f1906e452b9dc6679838b474542402491123a1b4a', text: () => import('./assets-chunks/hrm_index_html.mjs').then(m => m.default)},
    'sale-order-management/index.html': {size: 85876, hash: '75d40348169c4d13dc56c6591d9a775f4487e462de1eaf2d0580d0fe0e697233', text: () => import('./assets-chunks/sale-order-management_index_html.mjs').then(m => m.default)},
    'inventory-control-management/index.html': {size: 84910, hash: 'a56788e4c29fce5252b5ba7d5624f2a9af45d64da33b7e00ca0c6f7e4637360d', text: () => import('./assets-chunks/inventory-control-management_index_html.mjs').then(m => m.default)},
    'contactUs/index.html': {size: 85279, hash: '3b36de864b66287ffebfabaffc5b7cc617d10b9aadf00c584ad6bf27976c3391', text: () => import('./assets-chunks/contactUs_index_html.mjs').then(m => m.default)},
    'styles-4E3EC4UF.css': {size: 181255, hash: 'DSJ80i83ygE', text: () => import('./assets-chunks/styles-4E3EC4UF_css.mjs').then(m => m.default)}
  },
};
