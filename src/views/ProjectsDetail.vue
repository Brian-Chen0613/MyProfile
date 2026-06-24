<script setup>
import { RouterLink, useRoute } from "vue-router";
import { projectData } from "@/data/ProjectData.js";

const route = useRoute();
const project = projectData.find((item) => {
  return item.id === Number(route.params.id);
});
</script>

<template>
  <div class="container">
    <RouterLink :to="{ path: '/projects', query: { slide: route.query.slide } }" class="back-link">回到作品頁</RouterLink>
    <div class="card-wrapper">
      <div class="detail-card">
        <div class="card-left">
          <img :src="project.img" :alt="project.title" />
        </div>
        <div class="card-right">
          <div class="project-title">{{ project.title }}</div>
          <div class="skills-wrapper">
            <span v-for="(item, index) in project.skills" :key="index" class="skill-tag">{{ item }}</span>
          </div>
          <div class="detail-wrapper">
            <div class="project-detail">{{ project.detail }}</div>
            <div class="project-detail">遭遇的困難 :<br>{{ project.difficulty }}</div>
            <div class="project-detail">解決方法 :<br>{{ project.solution }}</div>
          </div>
          <div class="outter-link">
            <a href="" class="link">
              <FontAwesomeIcon :icon="['fas', 'link']" />
              GitHub 連結
            </a>
            <a href="" class="link">
              <FontAwesomeIcon :icon="['fas', 'link']" />
              Demo 連結
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  flex-grow: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #F0EDE7;
}

.card-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-link {
  width: fit-content;
  color: #8B7355;
  border: 1px solid #8B7355;
  font-size: 1.25rem;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-top: 22px;
  display: inline-block;
  transition: all 0.2s;
}

.back-link:hover {
  color: #F8F6F2;
  border-color: #F8F6F2;
  background-color: #8B7355;
}

.detail-card {
  display: flex;
  flex-direction: row;
  min-height: 500px;
  width: 1150px;
  background-color: #fff;
  padding: 10px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 0px 5px 0px rgb(87, 87, 87);
}

.card-left {
  width: 600px;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.card-left img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.card-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 500;
  color: #2C2C2C;
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  display: inline-block;
  color: #8B7355;
  border: 0.5px solid #8B7355;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 1.2rem;
}

.detail-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.project-detail {
  color: #7A7A7A;
  font-size: 1.1rem;
  line-height: 1.7;
}

.outter-link {
  display: flex;
  justify-content: end;
  gap: 0 5px;
}

.link {
  border: 0.5px solid #8B7355;
  border-radius: 10px;
  color: #8B7355;
  padding: 4px 8px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.2s;
}

.link:hover {
  color: #F8F6F2;
  border-color: #F8F6F2;
  background-color: #8B7355;
}
</style>
