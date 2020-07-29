import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'promo-viskhan',
  globalStyle: 'src/global.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
