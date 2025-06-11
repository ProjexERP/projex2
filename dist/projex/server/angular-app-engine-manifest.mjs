
export default {
  basePath: 'https://projexerp.github.io/projex',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
