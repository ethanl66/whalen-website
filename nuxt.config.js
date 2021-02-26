export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'whalen',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vue-tilt' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    '@nuxtjs/prismic',
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faLowVision', 'faCodeBranch', 'faUsers', 'faDatabase'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/cloudinary'],
  styleResources: {
    scss: [`./assets/scss/*.scss`],
  },
  prismic: {
    endpoint: 'https://primsic-demo.cdn.prismic.io/api/v2',
    preview: false,
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { analyze: true },
  cloudinary: {
    // Cloudinary configuration options
    cloudName: 'dbopxlpuy',
    useComponent: true,
  },
}
