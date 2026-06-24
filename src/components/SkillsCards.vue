<script setup>
const props = defineProps({
  img: { type: String, default: '' },
  level: { type: Number, default: 1 },
  name: { type: String, default: '' }
})
</script>

<template>
  <div class="skill-card">
    <div class="skill-img">
      <img :src="props.img" :alt="`${props.name} logo`" />
    </div>
    <div class="skill-name">{{ props.name }}</div>
    <div class="skill-stars">
      <span
        v-for="n in 5"
        :key="n"
        :class="n <= props.level ? 'star-on' : 'star-off'"
      >{{ n <= props.level ? '★' : '☆' }}</span>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.75rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.skill-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  box-shadow: 0 10px 24px rgba(61, 51, 42, 0.14);
}

.skill-img {
  width: 72px;
  height: 72px;
}
.skill-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-text);
  text-align: center;
}

.skill-stars {
  font-size: 1.25rem;
  letter-spacing: 2px;
}
.star-on {
  color: var(--color-accent);
}
.star-off {
  color: var(--color-tag-border);
}
</style>
