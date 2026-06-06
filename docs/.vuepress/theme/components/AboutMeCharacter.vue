<script setup>
import { useSiteI18n } from '../composables/useSiteI18n'

const { t } = useSiteI18n()
</script>

<template>
<div class="about-me-card-bg vp-blog-post-item about-me-character">
  <p class="about-me-card-title-normal">{{ t('character') }}</p>
  <div class="about-me-character-content">
    <div class="about-me-character-type">
      <p class="about-me-card-text-big about-me-card-text-color">{{ t('defender') }}</p>
      <p class="about-me-card-text-big">ISFJ</p>
    </div>
    <div class="about-me-character-img">
    </div>
  </div>

</div>
</template>

<style scoped>
.about-me-character{
  padding: 20px;
  &:hover .about-me-character-img{
    transform: scale(1.1);
  }
}

.about-me-character-content{
  display: flex;
}

.about-me-character-type{
  flex: 1;
}

.about-me-character-img{
  width: 150px;
  height: 150px;
  background-image: url("/ISFJ-A.png");
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  @media screen and (max-width: 770px) {
    width: 100px;
    height: 100px;
  }
}
</style>
