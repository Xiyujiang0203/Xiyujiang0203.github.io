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

const categoriesTransform = (categories: { id: string; sort: number; name: string }[]) =>
  categories.map(cat => {
    if (cat.name === 'android') return { ...cat, name: 'Android' }
    if (cat.name === 'rust') return { ...cat, name: 'Rust' }
    if (cat.name === 'career') return { ...cat, name: 'Career' }
    if (cat.name === 'reading') return { ...cat, name: '读书笔记' }
    if (cat.name === 'langchain') return { ...cat, name: 'LangChain' }
    return cat
  })

const categoriesTransformEn = (categories: { id: string; sort: number; name: string }[]) =>
  categories.map(cat => {
    if (cat.name === 'android') return { ...cat, name: 'Android' }
    if (cat.name === 'rust') return { ...cat, name: 'Rust' }
    if (cat.name === 'career') return { ...cat, name: 'Career' }
    if (cat.name === 'reading') return { ...cat, name: 'Reading' }
    if (cat.name === 'langchain') return { ...cat, name: 'LangChain' }
    return cat
  })

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
      profile: { location: '福建厦门', description: '人生就像生产环境，你永远不知道下一秒是流量高峰，还是磁盘写满。但没关系，先查日志（复盘），再重启（睡一觉），最后不行就回滚（认怂）。' },
      collections: [
        {
          type: 'post',
          dir: 'blog',
          title: '博客',
          pagination: 10,
          postCover,
          social: postSocial,
          categoriesTransform,
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
      profile: { location: 'Xiamen, Fujian', description: 'Life is like production: you never know if the next second brings a traffic spike or a full disk. No worries — check the logs (reflect), reboot (sleep), and if that fails, roll back (admit defeat).' },
      collections: [
        {
          type: 'post',
          dir: 'blog',
          title: 'Blog',
          pagination: 10,
          postCover,
          social: postSocial,
          categoriesTransform: categoriesTransformEn,
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
