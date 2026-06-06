import { computed } from 'vue'
import { useRouteLocale } from 'vuepress/client'
import { messages, type MessageKey } from '../i18n/messages'

export function useSiteI18n() {
  const routeLocale = useRouteLocale()
  const locale = computed(() => (routeLocale.value === '/en/' ? 'en' : 'zh'))

  function t(key: MessageKey) {
    return messages[locale.value][key]
  }

  function localePath(path: string) {
    const prefix = routeLocale.value
    if (prefix === '/') return path
    return `${prefix}${path.replace(/^\//, '')}`
  }

  return { t, locale, localePath }
}
