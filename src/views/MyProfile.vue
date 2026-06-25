<script setup>
import { useRouter } from "vue-router";
import avatar from "@/asset/img/avatar/大頭照.jpg";
import { projectData } from "@/data/ProjectData";
import ProjectCards from "@/components/ProjectCards.vue";

const router = useRouter();

const featuredProjects = projectData.slice(0, 3);

function goToDetail(id) {
  router.push(`/projects/${id}`);
}
</script>

<template>
  <section class="page home">
    <!-- ===== Hero（首屏） ===== -->
    <div class="hero">
      <div class="hero-photo">
        <img :src="avatar" alt="陳允的個人大頭照" />
      </div>
      <div class="hero-info">
        <span class="hero-badge">Frontend Developer</span>
        <h1 class="hero-name">陳允</h1>
        <p class="hero-title">前端開發學習者</p>
        <p class="hero-tagline">把每個細節做對，<br />是我對使用者的尊重。</p>
        <div class="hero-actions">
          <router-link class="btn btn-primary" to="/projects">瀏覽作品</router-link>
          <router-link class="btn btn-secondary" to="/skills">查看技能</router-link>
        </div>
      </div>
    </div>

    <!-- ===== 精選作品 ===== -->
    <section class="featured">
      <div class="featured-head">
        <h2 class="featured-title">精選作品</h2>
        <router-link class="featured-all" to="/projects">查看全部作品 →</router-link>
      </div>

      <div class="works-grid">
        <ProjectCards
          v-for="(item, index) in featuredProjects"
          :key="index"
          :img="item.img"
          :title="item.title"
          :describe="item.describe"
          :tags="item.tags"
          @viewProject="goToDetail(item.id)"
        />
      </div>
    </section>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* ===== Hero ===== */
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 2.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
}

.hero-photo img {
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.hero-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 420px;
}

.hero-badge {
  font-size: 1rem;
  padding: 4px 14px;
  border: 1px solid var(--color-tag-border);
  border-radius: 999px;
  color: var(--color-tag-text);
}

.hero-name {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
}

.hero-title {
  margin: 0;
  font-size: 1.5rem;
  color: var(--color-text-muted);
}

.hero-tagline {
  margin: 0.5rem 0 0;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text-soft);
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 1rem;
}

.btn {
  font-size: 1rem;
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-on-accent);
  border: 1px solid var(--color-accent);
}
.btn-primary:hover {
  background: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text-soft);
  border: 1px solid var(--color-tag-border);
}
.btn-secondary:hover {
  background: var(--color-border);
}

/* ===== 精選作品 ===== */
.featured-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.featured-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
}

.featured-all {
  font-size: 1rem;
  color: var(--color-text-soft);
  text-decoration: none;
  padding: 8px 18px;
  border: 1px solid var(--color-tag-border);
  border-radius: 8px;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.featured-all:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: var(--color-surface);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

/* ===== 手機版（≤ 768px）===== */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.25rem;
  }
  .hero-info {
    align-items: center;
  }
  .hero-photo img {
    width: 140px;
    height: 140px;
  }
}
</style>
