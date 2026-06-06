import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'icon-park:home-two' },
  { text: '博客', link: '/blog/', icon: 'logos:blogger' },
  { text: '标签', link: '/blog/tags/', icon: 'icon-park:tag' },
  { text: '归档', link: '/blog/archives/', icon: 'lucide:archive' },
  { text: '友链', link: '/friends/', icon: 'solar:accessibility-bold-duotone' },
  { text: '关于', link: '/about/', icon: 'fa:child' },
  {
    text: '笔记',
    icon: 'mdi:learn-outline',
    items: [{ text: '示例', link: '/notes/demo/' }],
  },
])
