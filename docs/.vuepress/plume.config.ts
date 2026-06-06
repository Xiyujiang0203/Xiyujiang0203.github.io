import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'

export default defineThemeConfig({
  logo: 'https://github.com/Xiyujiang0203.png',

  profile: {
    name: 'XYJIANG',
    description: 'Where the will is set, no distance is too great to reach.',
    avatar: 'https://github.com/Xiyujiang0203.png',
    location: 'Xiamen, Fujian',
    circle: true,
    layout: 'right',
  },

  appearance: true,

  social: [
    { icon: 'mdi:github', link: 'https://github.com/Xiyujiang0203' },
    { icon: 'simple-icons:csdn', link: 'https://jixiuy.blog.csdn.net' },
  ],
  navbarSocialInclude: ['mdi:github', 'simple-icons:csdn'],
  outline: [2, 6],

  transition: {
    page: true,
    postList: true,
    appearance: 'circle-clip',
  },

  collections: [
    {
      type: 'post',
      dir: 'blog',
      title: '博客',
      pagination: 10,
      postCover: {
        layout: 'odd-left',
        ratio: '16:9',
        width: 400,
        compact: true
      },
      social: [
        { icon: 'github', link: 'https://github.com/Xiyujiang0203' },
        { icon: 'simple-icons:csdn', link: 'https://jixiuy.blog.csdn.net' },
      ],
    },
    {
      type: 'doc',
      dir: 'notes',
      linkPrefix: '/notes/',
      title: '笔记',
      sidebar: 'auto',
    },
  ],

  copyright: 'CC-BY-NC-ND-4.0',

  footer: {
    message: '🥼 <a target="_blank" href="https://theme-plume.vuejs.press/">vuepress-theme-plume</a> & ✒️ XYJIANG',
  },

  navbar,
})
