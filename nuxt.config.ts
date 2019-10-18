import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['~/assets/scss/styles/main.scss'],
  plugins: [],
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  axios: {},
  styleResources: {
    scss: [
      '~/assets/scss/variables/main.scss',
      '~/assets/scss/mixins/main.scss'
    ]
  },
  fontawesome: {
    component: 'fa'
  },
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
  }
}

export default config
