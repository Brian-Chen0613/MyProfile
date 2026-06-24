<script setup>
import { RouterView, RouterLink, useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <nav>
    <RouterLink to="/">首頁</RouterLink>
    <RouterLink to="/skills">技能</RouterLink>
    <RouterLink
      to="/projects"
      :class="{ 'router-link-active': route.path.startsWith('/projects') }"
      >作品</RouterLink
    >
    <!-- startwith() -> 用來判斷字串是否以某個字元開頭 -->
  </nav>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
nav {
  background-color: #2c2c2c;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
  color: #f8f6f2;
  text-decoration: none;
  border: 1px solid #f8f6f2;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.25rem;
}

a:hover {
  color: #8b7355;
  border-color: #f8f6f2;
  background-color: #f8f6f2;
}

a.router-link-active {
  /* VueRouter內建的class */
  /* 只要路徑與當前連結的to相符，就會自動把這個class套用到RouterLink上 */
  background-color: #f8f6f2;
  color: #8b7355;
  border-color: #f8f6f2;
}
</style>
