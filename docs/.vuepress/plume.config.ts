import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { navbarEn } from './navbar.en'

const postCover = {
  layout: 'odd-left' as const,
  ratio: '16:9' as const,
  width: 400,
  compact: true,
}

const postSocial = [
  { icon: 'github', link: 'https://github.com/Xiyujiang0203' },
  { icon: 'simple-icons:csdn', link: 'https://jixiuy.blog.csdn.net' },
]

export default defineThemeConfig({
  logo: 'https://github.com/Xiyujiang0203.png',

  profile: {
    name: 'XYJIANG',
    avatar: 'https://github.com/Xiyujiang0203.png',
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

  copyright: 'CC-BY-NC-ND-4.0',
  footer: false,

  locales: {
    '/': {
      selectLanguageName: '简体中文',
      navbar,
      profile: { location: '福建厦门', description: '志之所趋 无远弗届 穷山距海 不能限也' },
      collections: [
        {
          type: 'post',
          dir: 'blog',
          title: '博客',
          pagination: 10,
          postCover,
          social: postSocial,
        },
        {
          type: 'doc',
          dir: 'notes',
          linkPrefix: '/notes/',
          title: '笔记',
          sidebar: 'auto',
        },
      ],
    },
    '/en/': {
      selectLanguageName: 'English',
      navbar: navbarEn,
      profile: { location: 'Xiamen, Fujian', description: 'Where the will aims, no distance is too far; mountains and seas cannot confine it.' },
      collections: [
        {
          type: 'post',
          dir: 'blog',
          title: 'Blog',
          pagination: 10,
          postCover,
          social: postSocial,
        },
        {
          type: 'doc',
          dir: 'notes',
          linkPrefix: '/notes/',
          title: 'Notes',
          sidebar: 'auto',
        },
      ],
    },
  },
})
