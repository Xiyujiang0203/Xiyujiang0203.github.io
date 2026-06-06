<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-life">
    <div style="margin-left: 20px">
    <p class="about-me-card-title-normal">{{ t('life') }}</p>
    <p class="about-me-card-text-big">{{ t('myLife') }}</p>
    </div>
  <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import * as echarts from 'echarts';
import { useSiteI18n } from '../composables/useSiteI18n'

const { t } = useSiteI18n()
const chartRef = ref(null);

const lifeData = computed(() => [
  { name: t('lifeResearch'), value: 1 },
  { name: t('lifeLove'), value: 1 },
  { name: t('lifeWork'), value: 1 },
  { name: t('lifeStudy'), value: 1 },
  { name: t('lifeAnime'), value: 1 },
  { name: t('lifeExercise'), value: 1 },
  { name: t('lifeReading'), value: 1 },
]);

onMounted(() => {
  const myChart = echarts.init(chartRef.value);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: t('myLife'),
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 360,
        data: lifeData.value
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', () => {
    myChart.resize();
  });
});
</script>

<style scoped>

.about-me-life{
  height: 316px;
  padding: 20px 0;
  overflow: inherit;
}
.chart-container {
  height: 100%;
}
</style>
