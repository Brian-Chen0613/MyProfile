<script setup>
import { RouterLink, useRoute } from "vue-router";
import { projectData } from "@/data/ProjectData.js";

const route = useRoute();
const project = projectData.find((item) => item.id === Number(route.params.id));
</script>

<template>
  <section class="page">
    <RouterLink to="/projects" class="back-link">← 回到作品頁</RouterLink>

    <div v-if="project" class="detail-card">
      <h1 class="detail-title">{{ project.title }}</h1>

      <div class="detail-tags">
        <span class="detail-tag" v-for="(tag, i) in project.tags" :key="i">{{ tag }}</span>
      </div>

      <div class="detail-img">
        <img :src="project.img" :alt="`${project.title} 預覽圖`" />
      </div>

      <section class="detail-section">
        <h2 class="section-title">專案說明</h2>
        <p class="section-text">{{ project.detail }}</p>
      </section>

      <section class="process-box">
        <h2 class="section-title">開發歷程</h2>
        <div class="process-item">
          <p class="process-label">遭遇的困難</p>
          <p class="section-text">{{ project.difficulty }}</p>
        </div>
        <div class="process-item">
          <p class="process-label">解決方法</p>
          <p class="section-text">{{ project.solution }}</p>
        </div>
      </section>

      <div class="detail-actions" v-if="project.demo">
        <a class="demo-btn" :href="project.demo" target="_blank" rel="noopener">前往 Demo →</a>
      </div>
    </div>

    <p v-else class="not-found">找不到這個作品。</p>
  </section>
</template>

<style scoped>
.back-link {
  display: inline-block;
  font-size: 1rem;
  color: var(--color-text-soft);
  padding: 6px 14px;
  border: 1px solid var(--color-tag-border);
  border-radius: 8px;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.back-link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-surface);
}

.detail-card {
  margin-top: 1.25rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1.75rem;
}

.detail-title {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 0.75rem;
}
.detail-tag {
  font-size: 1rem;
  padding: 2px 12px;
  border: 1px solid var(--color-tag-border);
  border-radius: 999px;
  color: var(--color-tag-text);
}

.detail-img {
  margin-top: 1.25rem;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  background: var(--color-border);
}
.detail-img img {
  display: block;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  object-position: left center;
}

.detail-section {
  margin-top: 1.5rem;
}

.section-title {
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-text);
}

.section-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.process-box {
  margin-top: 1.5rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 1.25rem;
}
.process-item {
  margin-bottom: 1rem;
}
.process-item:last-child {
  margin-bottom: 0;
}
.process-label {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-soft);
}

.detail-actions {
  margin-top: 1.5rem;
}
.demo-btn {
  display: inline-block;
  font-size: 1rem;
  padding: 10px 22px;
  border-radius: 8px;
  background: var(--color-accent);
  color: var(--color-on-accent);
  text-decoration: none;
  transition: background 0.2s;
}
.demo-btn:hover {
  background: var(--color-accent-hover);
}

.not-found {
  margin-top: 2rem;
  font-size: 1rem;
  color: var(--color-text-muted);
}
</style>
