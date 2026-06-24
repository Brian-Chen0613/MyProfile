<script setup>
import { RouterView, RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav>
    <div class="nav-inner">
      <RouterLink to="/" class="brand">個人作品集</RouterLink>
      <div class="nav-links">
        <RouterLink to="/" :class="{ 'nav-active': route.path === '/' }">首頁</RouterLink>
        <RouterLink to="/skills" :class="{ 'nav-active': route.path === '/skills' }">技能</RouterLink>
        <RouterLink
          to="/projects"
          :class="{ 'nav-active': route.path.startsWith('/projects') }"
          >作品</RouterLink
        >
        <!-- startsWith() -> 讓 /projects/:id 詳情頁也算在「作品」內 -->
        <a
          href="https://github.com/Brian-Chen0613"
          target="_blank"
          rel="noopener"
          class="nav-github"
          aria-label="GitHub"
        >
          <FontAwesomeIcon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </nav>
  <div class="content">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
nav {
  background: var(--color-nav-bg);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.content {
  padding-top: 57px;
}

.nav-inner {
  max-width: 1150px;
  margin: 0 auto;
  padding: 14px 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  color: var(--color-nav-text);
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  color: var(--color-nav-text);
  text-decoration: none;
  padding: 8px 12px;
  font-size: 1.25rem;
  border-radius: 6px;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--color-accent);
}

.nav-links a.nav-active {
  color: var(--color-accent);
  font-weight: 500;
}

.nav-github {
  display: inline-flex;
  align-items: center;
  font-size: 1.25rem;
}

.nav-links .nav-github {
  font-size: 1.5rem;   /* ← 這裡調整圖示大小 */
}

@media (max-width: 768px) {
  .nav-inner {
    padding: 12px 1rem;
  }
  .brand {
    font-size: 1.125rem;
  }
  .nav-links {
    gap: 2px;
  }
  .nav-links a {
    padding: 6px 8px;
    font-size: 1rem;
  }
}
</style>
