export default {
  target: 'static',

  head: {
    title: 'simple-blot-on-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  plugins: [
    '@/plugins/globals'
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},
  
  build: {
    transpile: [/^element-ui/],
  }
}
