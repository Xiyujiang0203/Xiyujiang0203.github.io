import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbarEn = defineNavbarConfig([
  { text: 'Home', link: '/en/', icon: 'icon-park:home-two' },
  { text: 'Blog', link: '/en/blog/', icon: 'logos:blogger' },
  { text: 'Tags', link: '/en/blog/tags/', icon: 'icon-park:tag' },
  { text: 'Archives', link: '/en/blog/archives/', icon: 'lucide:archive' },
  { text: 'Friends', link: '/en/friends/', icon: 'solar:accessibility-bold-duotone' },
  { text: 'About', link: '/en/about/', icon: 'fa:child' },
  {
    text: 'Notes',
    icon: 'mdi:learn-outline',
    items: [{ text: 'Demo', link: '/en/notes/demo/' }],
  },
])
