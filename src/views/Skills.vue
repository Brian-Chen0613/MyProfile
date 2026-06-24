<script setup>
import SkillsCards from "@/components/SkillsCards.vue";
import htmlSVG from "@/asset/img/skillSVG/html.svg";
import CSSSVG from "@/asset/img/skillSVG/css.svg";
import JSSVG from "@/asset/img/skillSVG/js.svg";
import VueSVG from "@/asset/img/skillSVG/Vue.js.svg";
import GitSVG from "@/asset/img/skillSVG/Git.svg";
import RWDSVG from "@/asset/img/skillSVG/RWD.svg";

const skillData = [
  { name: "HTML", img: htmlSVG, level: 4 },
  { name: "CSS", img: CSSSVG, level: 4 },
  { name: "JavaScript", img: JSSVG, level: 3 },
  { name: "Vue.js", img: VueSVG, level: 3 },
  { name: "Git", img: GitSVG, level: 3 },
  { name: "RWD", img: RWDSVG, level: 3 },
];
</script>

<template>
  <section class="page">
    <h1 class="page-title">我的技能</h1>
    <div class="skills-grid">
      <SkillsCards
        v-for="(item, index) in skillData"
        :key="index"
        :img="item.img"
        :level="item.level"
        :name="item.name"
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>
