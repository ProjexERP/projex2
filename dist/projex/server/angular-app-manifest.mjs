
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
  },
  {
    "renderMode": 2,
    "route": "/projex/login"
  },
  {
    "renderMode": 2,
    "route": "/projex/erp/selectform-new"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12652, hash: '700c3964ae41c457755cf12d3cf89e84654fdd394ddc5500059d29aecba923cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1224, hash: '8e2a1323ee100057ee25d9eba9c12f36978a7537d1090441b3b29ce5fe2fa8e6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'payroll/index/index.html': {size: 189379, hash: '16678536355ccc5df3b1da2e4e2f871ba0fd6ad39bf0a598c35d75e7761afeea', text: () => import('./assets-chunks/payroll_index_index_html.mjs').then(m => m.default)},
    'product/Planandpricing/index.html': {size: 174804, hash: '6483d11f153929c98de97bfadb0f69166c92db7be8b4cdd4417e3880c682e5a8', text: () => import('./assets-chunks/product_Planandpricing_index_html.mjs').then(m => m.default)},
    'manage-account/index.html': {size: 96060, hash: 'f98c7ce27ea397012c5d67ed11eca8d40ab8072d0f30a2aa7d6ad835e4e4f3eb', text: () => import('./assets-chunks/manage-account_index_html.mjs').then(m => m.default)},
    'product/prodandplan/index.html': {size: 114158, hash: 'dc2bfb334c2586a466f3f90d59a0feff04b4dece15b663be085d02421f6c08ac', text: () => import('./assets-chunks/product_prodandplan_index_html.mjs').then(m => m.default)},
    'hrm/index.html': {size: 96224, hash: 'd617508363343d2b3c11a86785429fe0f6fcbbe7a0616363bbb979be50a1b8d4', text: () => import('./assets-chunks/hrm_index_html.mjs').then(m => m.default)},
    'index.html': {size: 171341, hash: '457af488fdbc80c0f784c304095fe696f9f6e0149cb4b1a2db51f2865c6bacae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sale-order-management/index.html': {size: 85927, hash: 'd8f56af17081b26c654e8713262d6102e9d09e76df9d2a3896ec5d34f062b905', text: () => import('./assets-chunks/sale-order-management_index_html.mjs').then(m => m.default)},
    'inventory-control-management/index.html': {size: 84961, hash: 'e0f70c274fefcc36bc4ed2a99d3a994bb2abc1d26b587020800977d27311669c', text: () => import('./assets-chunks/inventory-control-management_index_html.mjs').then(m => m.default)},
    'contactUs/index.html': {size: 85330, hash: '80209815beed9448e7ebc66731b8937a034267b551cfe2c955cf09185c446604', text: () => import('./assets-chunks/contactUs_index_html.mjs').then(m => m.default)},
    'erp/selectform-new/index.html': {size: 74561, hash: '103f38ef18266a861dc7bac91b82708da482229e19e77e4b9782efe5021b813a', text: () => import('./assets-chunks/erp_selectform-new_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 81940, hash: '189c29de447d98137645a06806bdcf60df64a031fbcda9ef0324b19c7a87fbd1', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-4E3EC4UF.css': {size: 181255, hash: 'DSJ80i83ygE', text: () => import('./assets-chunks/styles-4E3EC4UF_css.mjs').then(m => m.default)}
  },
};
