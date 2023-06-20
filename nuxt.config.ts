// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: { enabled: false },
  
    runtimeConfig: {
      apiSecret: '123',
      public: {
        apiBase: "https://api.cholla.info/"
      }
    },

    modules: [
      '@ant-design-vue/nuxt',
    ],
    antd:{
      // Options 
    }
  
  })