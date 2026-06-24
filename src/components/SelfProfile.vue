<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  showMore: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="profile-container">
    <div class="img-area">
      <img
        src="https://fr.lassie.co/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fr208a72kad0m%2F7Chljcjz5rGLSyagxV1eqW%2F4e8720c28dda762e938d11ffba712aa2%2FKattraser.png&w=3840&q=75"
        alt=""
      />
    </div>
    <div class="content">
      <div class="text-primary">陳允</div>
      <div class="text-primary">目前為：前端工程師</div>
      <hr class="divider" />
      <div class="text-secondary">餐飲相關經歷：一年</div>
      <div class="text-secondary">物流相關經歷：半年</div>
      <hr class="divider" />
      <div class="text-primary">持續精進中</div>
      <RouterLink to="projects" v-if="props.showMore" class="text-link"
        >瞭解更多</RouterLink
      >
    </div>
  </div>
</template>
