<script setup>
import { useSiteI18n } from '../composables/useSiteI18n'

const { t } = useSiteI18n()
</script>

<template>
  <div class="about-me-name">
    <p>{{ t('greeting') }}</p>
    <p class="about-me-card-text-big">{{ t('callMe') }}</p>
    <p>{{ t('intro') }}</p>
  </div>
</template>

<style scoped>
.about-me-name{
  border-radius: 12px;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  background-image: linear-gradient(120deg, var(--vp-c-brand-3), var(--vp-c-brand-soft));
  background-size: 200% 200%;
  >p{
    color: var(--vp-c-text-1);
  }
}
</style>
