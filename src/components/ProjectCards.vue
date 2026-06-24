<script setup>
const props = defineProps({
  img: { type: String, default: "" },
  title: { type: String, default: "" },
  describe: { type: String, default: "" },
  tags: { type: Array, default: () => [] },
});

const emits = defineEmits(["viewProject"]);
</script>

<template>
  <div class="project-card">
    <div class="card-img">
      <img :src="props.img" :alt="`${props.title} 預覽圖`" />
    </div>
    <div class="card-body">
      <div class="card-tags">
        <span class="card-tag" v-for="(tag, i) in props.tags" :key="i">{{ tag }}</span>
      </div>
      <h2 class="card-title">{{ props.title }}</h2>
      <p class="card-desc">{{ props.describe }}</p>
      <button class="view-btn" @click="emits('viewProject')">查看作品</button>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  box-shadow: 0 10px 24px rgba(61, 51, 42, 0.14);
}

.card-img {
  aspect-ratio: 16 / 9;
  background: var(--color-border);
}
.card-img img {
  display: block;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  /* object-position: left center; */
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.25rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.card-tag {
  font-size: 1rem;
  padding: 2px 12px;
  border: 1px solid var(--color-tag-border);
  border-radius: 999px;
  color: var(--color-tag-text);
  display: flex;
  align-items: center;
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
}

.card-desc {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.view-btn {
  margin-top: auto;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: var(--color-text);
  color: var(--color-bg);
  cursor: pointer;
  transition: background 0.2s;
}
.view-btn:hover {
  background: var(--color-accent);
}
</style>
