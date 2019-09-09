
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },
  /*
  ** Global CSS
  */
  css: ['~/assets/styles/main.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    '@nuxtjs/axios'
  ],


  // Set the @nuxtjs/auth middleware globally
  router: {
    middleware: ['auth']
  },


  // @nuxtjs/auth config
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login/', method: 'post', propertyName: 'key' },
          logout: { url: 'auth/logout/', method: 'post' },
          user: { url: 'user/', method: 'get', propertyName: false }
        },
        tokenRequired: true,
        tokenType: 'Token'
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    }
  },

  toast: {
    position: 'top-right',
    duration: 2000
  },

  loading: {
    name: 'chasing-dots',
    color: '#ffffff',
    background: 'white',
    height: '4px'
  },

  axios: {
    baseURL: "http://localhost:8000/api/"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}