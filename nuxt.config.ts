// https://nuxt.com/docs/api/configuration/nuxt-config
const config : any = {
  runtimeConfig: { // 環境變數
    public: {
      apiUrl: '',
    },
  },
  vite: {
    server: {
      proxy: {
        '/api/v1': {
          target: 'https://nuxr3.zeabur.app',
          changeOrigin: true,
          rewrite: (path: any) => path.replace('/^\/api/', '')
        }
      }
    }
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://nuxr3.zeabur.app',
        changeOrigin: true,
      }
    }
  },
  routeRules: {
    '/api/**': {
      proxy: 'https://nuxr3.zeabur.app/**',
    }
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  // compatibilityDate 屬性 : 將 Nuxt3 的功能和行為鎖定在 2024-04-03 之前的版本，
  // 避免之後 Nuxt3 新版本的寫法調整會影響到目前專案的運作
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
   modules: ['@samk-dev/nuxt-vcalendar', 'nuxt-swiper', '@nuxt/icon', '@pinia/nuxt'],
   icon: {
    serverBundle: {
      collections: ['bi', 'mdi', 'ic', 'fluent', 'material-symbols'] // <!--- this
    }
  },
  swiper: {
    // modules: ['navigation', 'pagination', 'autoplay'], // all modules are imported by default
  },
  css: [
    '@/assets/css/app.scss'
  ],
  postcss: { // CSS 屬性加上瀏覽器相容性前綴
    plugins: {
        autoprefixer: {}
    }
  }
}

if(process.env.NODE_ENV === 'development') {
  config.vite.server.proxy = {
    '/api/v1': {
      target: 'https://nuxr3.zeabur.app',
      changeOrigin: true
    }
  }
}

export default defineNuxtConfig(config)