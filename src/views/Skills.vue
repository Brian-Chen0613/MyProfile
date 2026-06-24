<script setup>
import SkillsCards from "@/components/SkillsCards.vue";
import htmlSVG from "@/asset/img/skillSVG/html.svg";
import CSSSVG from "@/asset/img/skillSVG/css.svg";
import JSSVG from "@/asset/img/skillSVG/js.svg";
import VueSVG from "@/asset/img/skillSVG/Vue.js.svg";
import GitSVG from "@/asset/img/skillSVG/Git.svg";
import RWDSVG from "@/asset/img/skillSVG/RWD.svg";
import FigmaSVG from "@/asset/img/skillSVG/Figma.svg";
import PSSVG from "@/asset/img/skillSVG/PS.svg";
import AISVG from "@/asset/img/skillSVG/AI.svg";

const skillData = [
  {
    name: "HTML",
    img: htmlSVG,
    level: 4,
  },
  {
    name: "CSS",
    img: CSSSVG,
    level: 4,
  },
  {
    name: "JavaScript",
    img: JSSVG,
    level: 3,
  },
  {
    name: "Vue.js",
    img: VueSVG,
    level: 3,
  },
  {
    name: "Git",
    img: GitSVG,
    level: 3,
  },
  {
    name: "RWD",
    img: RWDSVG,
    level: 3,
  },
  {
    name: "Figma",
    img: FigmaSVG,
    level: 4,
  },
  {
    name: "PhotoShop",
    img: PSSVG,
    level: 3,
  },
  {
    name: "Illustrator",
    img: AISVG,
    level: 4,
  },
];
</script>

<template>
  <div class="skill-container">
    <h1>我的技能</h1>
    <div class="skills">
      <SkillsCards v-for="(item, index) in skillData" :key="index" :img="item.img" :level="item.level"
        :name="item.name">
      </SkillsCards>
    </div>
  </div>
</template>

<style scoped>
.skill-container {
  flex-grow: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: #f0ede7;
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  /* autofill -> 能塞多少就塞多少 */
  /* minman(最小值,最大值) */
  /* 每個格子最小350px，最大1fr(剩餘空間平分)，重複排列直到塞不下 */
  gap: 2rem 1rem;
}
</style>
