<script setup>
const props = defineProps({
  img: { type: String, default: "" },
  title: { type: String, default: "" },
  describe: { type: String, default: "" },
});

const emits = defineEmits(["viewProject"]);
</script>

<template>
  <div class="project-card">
    <div class="card-img">
      <img :src="props.img" :alt="props.title" />
    </div>
    <h2>{{ props.title }}</h2>
    <div class="describe">{{ props.describe }}</div>
    <div class="check" @click="emits('viewProject')">查看作品</div>
  </div>
</template>

<style scoped>
.project-card {
  width: 700px;
  height: 550px;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-img {
  flex: 1;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
}


h2 {
  text-align: center;
  padding: 1rem;
  margin: 0;
  color: #2c2c2c;
}

.describe {
  text-align: center;
  padding: 0 1rem;
  color: #7a7a7a;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.check {
  text-align: center;
  padding: 0.75rem;
  margin: 0 1rem 1rem;
  cursor: pointer;
  border: 1px solid #8b7355;
  border-radius: 8px;
  color: #8b7355;
  transition: all 0.2s;
}

.check:hover {
  background-color: #8b7355;
  color: #f8f6f2;
}
</style>
