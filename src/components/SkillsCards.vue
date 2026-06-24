<script setup>
const props = defineProps({
    img: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s'
    },
    level: {
        type: Number,
        default: 1
    },
    name: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="skills">
        <div class="single-skill">
            <div class="skill-img">
                <img :src="props.img" alt="">
            </div>
            <div class="star">
                <span v-for="n in 5" :key="n" class="gold">
                    {{ n <= props.level ? '★' : '☆' }}</span>
            </div>
            <div class="skill-name">{{ props.name }}</div>
        </div>
    </div>
</template>

<style scoped>
.skills {
    box-sizing: border-box;
}

.single-skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1rem;
    gap: 0.5rem;
    box-sizing: border-box;
    width: 100%;
}

.skill-img {
    width: 80px;
    height: 80px;
}

img {
    width: 100%;
    height: 100%;
}

.gold {
    color: gold;
    font-size: 1.5rem;
}

.skill-name {
    font-size: 1.5rem;
    color: #2C2C2C;
    text-align: center;
}
</style>