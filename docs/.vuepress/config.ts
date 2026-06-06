import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'XYJIANG',

  locales: {
    '/': { lang: 'zh-CN', title: 'XYJIANG' },
    '/en/': { lang: 'en-US', title: 'XYJIANG' },
  },

  head: [
    ['link', { rel: 'icon', href: 'https://github.com/Xiyujiang0203.png' }],
    ['link', { rel: 'stylesheet', href: 'https://fontsapi.zeoseven.com/292/main/result.css' }],
    // Umami 统计（填写后取消注释）
    // ['script', { async: true, defer: true, 'data-website-id': 'YOUR_UMAMI_ID', src: 'https://YOUR_UMAMI_DOMAIN/script.js' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    hostname: 'https://xiyujiang0203.github.io',

    contributors: {
      mode: 'block',
      info: [
        {
          username: 'Xiyujiang0203',
          alias: ['XYJIANG'],
        }
      ]
    },
    changelog: true,

    plugins: {
      git: process.env.NODE_ENV === 'production'
    },

    article: '/blog/',
    cache: 'filesystem',
    search: { provider: 'local' },

    codeHighlighter: {
      whitespace: true,
    },

    markdown: {
      abbr: true,
      annotation: true,
      timeline: true,
      collapse: true,
      echarts: true,
      fileTree: { icon: 'colored' },
    },

    // Twikoo 评论（填写后取消注释）
    // comment: {
    //   provider: 'Twikoo',
    //   comment: true,
    //   envId: 'YOUR_TWIKOO_ENV_ID',
    // },
  }),
})
