import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Takhleq',
    title: 'Takhleq',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.svg' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/main.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dir: ["~/components"]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next',
    ['@nuxtjs/i18n' , {
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          name: 'Urdu',
          code: 'ur',
          iso: 'ur-UR',
          file: 'ur-UR.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en',
    }]
  ],

  toast: {
    position: 'bottom-center',
    duration: 3000,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    proxyHeaders: false,
    credentials: false
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeshake: true,
    theme: {
      options: { customProperties: true },
      themes: {
        light: {
          background: '#FCBA03',
          primary: "#FCBA03",
          accent: colors.amber.darken3,
          secondary: colors.amber.darken3,
          info: "#fff",
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/user/login",
            method: "post",
            propertyName: "data.token",
          },
          user: { url: "/user/me", method: "get" },
          logout: false,
          tokenRequired: true,
          tokenType: "Bearer",
          globalToken: true,
        },
        user: {
          property: '',
        },
        token: {
          maxAge:  60, // one month
        },
      },
    },
  },
};
