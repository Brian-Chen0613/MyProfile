<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { projectData } from "@/data/ProjectData";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import ProjectCards from "@/components/ProjectCards.vue";

const router = useRouter();
const route = useRoute();
const swiperInstance = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);

function onSwiper(swiper) {
  swiperInstance.value = swiper;
  isEnd.value = swiper.isEnd;

  const slideIndex = Number(route.query.slide) || 0;
  // 初始化時，將ProjectDetail帶回來的query.slide裝進變數，要記得轉成數字
  // 再透過這個變數，swiper會導航到指定的張數
  if (slideIndex > 0) swiper.slideTo(slideIndex, 0);
  // slideTo() -> Swiper提供的一種方法，用來跳到指定的張數
  // 第一個參數 -> 要跳到幾張 ， 第二個參數 -> 切換動畫的秒數(毫秒)，填0就是不要動畫
}

// 更新是否是第一張/最後一張，用來控制左右按鈕是否隱藏
function onSlideChange(swiper) {
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
}

function goToDetail(id) {
  const currentIndex = swiperInstance.value?.activeIndex ?? 0;
  // ?. -> 可選鍊，如果上面的值存在，才存取下面的值
  // activeIndex -> swiper物件內的一個key，值是當前張數的index，從0開始
  // ?? -> 如果結果是null或undefined，就用後面的值取代
  // 整句代碼 -> 如果swiperInstance.value有值，就存取activeIndex，沒有的話就存取0
  router.push({ path: `/projects/${id}`, query: { slide: currentIndex } });
  // router.push -> 導航到指定頁面
  // 可以純字串寫法 => router.push(`/projects/${id}?slide=${currentIndex}`)
  // 也支援物件寫法，會把query: {  } 自動轉換成?key=value
  // 最終網址 => /projects/${id}?slide=${currentIndex}
}
</script>

<template>
  <div class="project-container">
    <h1>我的作品</h1>
    <div class="swiper-nav-wrapper">
      <div class="swiper-inner">
        <button class="nav-btn nav-btn--prev" :class="{ hidden: isBeginning }" @click="swiperInstance?.slidePrev()">
          &#8249;
        </button>
        <Swiper :slides-per-view="1" :allow-touch-move="false" @swiper="onSwiper" @slideChange="onSlideChange"
          class="project-swiper">
          <SwiperSlide v-for="(item, index) in projectData" :key="index">
            <ProjectCards :img="item.img" :title="item.title" :describe="item.describe"
              @viewProject="goToDetail(item.id)" />
          </SwiperSlide>
        </Swiper>
        <button class="nav-btn nav-btn--next" :class="{ hidden: isEnd }" @click="swiperInstance?.slideNext()">
          &#8250;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  flex-grow: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: #f0ede7;
  overflow: hidden;
}

.swiper-nav-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-inner {
  position: relative;
}

.project-swiper {
  width: 700px;
  height: 550px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 5px 0px black;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #8b7355;
  background: transparent;
  color: #8b7355;
  font-size: 1.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.nav-btn--prev {
  right: calc(100% + 16px);
}

.nav-btn--next {
  left: calc(100% + 16px);
}

.nav-btn:hover {
  background-color: #8b7355;
  color: #f8f6f2;
}

.nav-btn.hidden {
  visibility: hidden;
  /* 視覺上隱形，但元素還在原本的位置，有占據空間 */
}
</style>
