
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://projexerp.github.io/projex/',
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
    'index.csr.html': {size: 12630, hash: '81dce7e8e23947766117fe8ab91dc422d61d79d961e3253cc0c886ca8ade7afc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1202, hash: '3aff6369bc9836f47724cecc587f1354de5955f3c41bb2f1f63bb96ce5f17fab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'payroll/index/index.html': {size: 189196, hash: '351ac73df18af077de77a272d9077516af6c4372e180257e968c8881bc832524', text: () => import('./assets-chunks/payroll_index_index_html.mjs').then(m => m.default)},
    'product/prodandplan/index.html': {size: 113975, hash: 'a654439a358bd581f512c7144cb122ef7446f548e95ac43c85385dd103ef15a4', text: () => import('./assets-chunks/product_prodandplan_index_html.mjs').then(m => m.default)},
    'index/index.html': {size: 171158, hash: '6fd9ac6c699bfb3c3a749c99c9dbf38f8b248604b91250faf704dad78f9f33f5', text: () => import('./assets-chunks/index_index_html.mjs').then(m => m.default)},
    'manage-account/index.html': {size: 95877, hash: '34235800de7fa784b8cc75cfe9b4eccbaa19259a98de83f5187224998a5e2856', text: () => import('./assets-chunks/manage-account_index_html.mjs').then(m => m.default)},
    'product/Planandpricing/index.html': {size: 174621, hash: 'c8607d988cb936ec5741c7b3510cfbf1103f0f7b6291b8ab487d77c6d1a5c4f0', text: () => import('./assets-chunks/product_Planandpricing_index_html.mjs').then(m => m.default)},
    'hrm/index.html': {size: 96041, hash: 'c3e574f205930382c55444fb5d0ddb81f3b12e84226804b2bfd9117867e8f43f', text: () => import('./assets-chunks/hrm_index_html.mjs').then(m => m.default)},
    'sale-order-management/index.html': {size: 85744, hash: '9b266bdfeb4d623b1ef681ae6407d2b22dfc4b0ed34b90ce94ed380dd96d36c3', text: () => import('./assets-chunks/sale-order-management_index_html.mjs').then(m => m.default)},
    'inventory-control-management/index.html': {size: 84778, hash: '68e498d3d8b55e01798c01b82b74c79f477d5d7217c2c0043ab633604b6d5d11', text: () => import('./assets-chunks/inventory-control-management_index_html.mjs').then(m => m.default)},
    'contactUs/index.html': {size: 85147, hash: '698b078ef90d0c3bd40fc0f8be6ad7b3f2ae1e7292033f103266e4db450730c7', text: () => import('./assets-chunks/contactUs_index_html.mjs').then(m => m.default)},
    'styles-4E3EC4UF.css': {size: 181255, hash: 'DSJ80i83ygE', text: () => import('./assets-chunks/styles-4E3EC4UF_css.mjs').then(m => m.default)}
  },
};
