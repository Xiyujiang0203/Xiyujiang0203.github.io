<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-skill">
    <div style="margin-left: 20px">
      <p class="about-me-card-title-normal">技能</p>
      <p class="about-me-card-text-big">我的能力</p>
    </div>
    <!-- 第一行向左移动 -->
    <div class="marquee-row first-row">
      <div class="marquee-content">
        <span v-for="(item, index) in technology" :key="index"> <icon :name="item.icon" /> </span>
        <span v-for="(item, index) in technology" :key="index + technology.length"><icon :name="item.icon" /></span>
      </div>
    </div>
    <!-- 第二行向右移动 -->
    <div class="marquee-row second-row">
      <div class="marquee-content">
        <span v-for="(item, index) in tools" :key="index"><icon :name="item.icon" /></span>
        <span v-for="(item, index) in tools" :key="index + tools.length"><icon :name="item.icon" /></span>
      </div>
    </div>

    <div class="about-me-skill-detail">
      <span v-for="(item, index) in technology" :key="'t-' + index"> <icon :name="item.icon" /> <span>{{ item.type }}</span> </span>
      <span v-for="(item, index) in tools" :key="'o-' + index"> <icon :name="item.icon" /> <span>{{ item.type }}</span> </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 技能
const technology = ref([
  { type: 'Figma', icon: 'logos:figma' },
  { type: 'Android', icon: 'logos:android-icon' },
  { type: 'Jetpack Compose', icon: 'devicon:jetpackcompose' },
  { type: 'Flutter', icon: 'logos:flutter' },
  { type: 'Vue.js', icon: 'logos:vue' },
  { type: 'Go', icon: 'logos:go' },
  { type: 'Spring Boot', icon: 'devicon:spring' },
  { type: 'Java', icon: 'devicon:java' },
  { type: 'Kotlin', icon: 'devicon:kotlin' },
  { type: 'Python', icon: 'logos:python' },
  { type: 'Node.js', icon: 'logos:nodejs-icon' },
  { type: 'C', icon: 'logos:c' },
  { type: 'C++', icon: 'devicon:cplusplus' },
  { type: 'PyTorch', icon: 'logos:pytorch-icon' },
  { type: 'MySQL', icon: 'devicon:mysql' },
  { type: 'SQLite', icon: 'devicon:sqlite' },
  { type: 'Redis', icon: 'devicon:redis' },
])

const tools = ref([
  { type: 'Docker', icon: 'devicon:docker' },
  { type: 'Git', icon: 'devicon:git' },
  { type: 'GitHub Actions', icon: 'logos:github-actions' },
  { type: 'Cursor', icon: 'simple-icons:cursor' },
  { type: 'VSCode', icon: 'vscode-icons:file-type-vscode' },
  { type: 'Claude Code', icon: 'simple-icons:anthropic' },
  { type: 'macOS', icon: 'logos:apple' },
  { type: 'Windows', icon: 'logos:microsoft-windows' },
  { type: 'Dart', icon: 'logos:dart' },
  { type: 'Markdown', icon: 'logos:markdown' },
])
</script>

<style scoped>
.about-me-skill{
  position: relative;
  min-height: 316px;
  padding: 20px 0;
  z-index: 1;
  &:hover .marquee-row{
    opacity: 0;
  }
  &:hover .about-me-skill-detail{
    opacity: 1;
    pointer-events: auto;
  }
}

.about-me-skill-detail{
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 12px;
  opacity: 0;
  z-index: 2;
  display: flex;
  padding: 0 20px 4px;
  transition: opacity 0.5s;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: auto;
  pointer-events: none;
  >span{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6px 6px 0;
    border-radius: 8px;
    padding: 7px;
    font-size: 16px;
    color: var(--vp-c-text-2);
    background-color: var(--home-action-bnt-bg);
  }
}

.marquee-row {
  transition: opacity 0.6s 0.1s;
  width: 105%;
  margin-left: -6px;
  overflow: hidden;
  white-space: nowrap;
  transform: rotateZ(-6deg);
}

.marquee-content {
  display: inline-flex;
  animation: marquee-left 30s linear infinite;
  >span{
    border-radius: 20%;
    align-content: center;
    align-items: center;
    background-color: var(--about-me-skill-item-bg);
    width: 80px;
    height: 80px;
    font-size: 50px;
    margin: 0 10px;
  }

}
.first-row{
  margin-top: 20px;
}
.second-row{
  margin-top: 20px;
}
.second-row .marquee-content {
  animation: marquee-right 50s linear infinite;
}

@keyframes marquee-left {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}
</style>