<script setup>
import { useRouter } from "vue-router";
import { projectData } from "@/data/ProjectData";
import ProjectCards from "@/components/ProjectCards.vue";

const router = useRouter();

function goToDetail(id) {
  router.push(`/projects/${id}`);
}
</script>

<template>
  <section class="page">
    <h1 class="page-title">我的作品</h1>
    <div class="projects-grid">
      <ProjectCards
        v-for="(item, index) in projectData"
        :key="index"
        :img="item.img"
        :title="item.title"
        :describe="item.describe"
        :tags="item.tags"
        @viewProject="goToDetail(item.id)"
      />
    </div>
  </section>
</template>

<style scoped>
.page-title {
  margin: 0 0 40px;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
</style>
