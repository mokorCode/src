<template>
    <div class="top">
        <DefaultNav />
        <main class="osu-main">
            <div class="osu-block"></div>
            <OsuForMusic />
        </main>
        <footer>
            <p>osu! standard web by mokor</p>
        </footer>
    </div>
</template>

<script setup name='Welcome'>
import DefaultNav from './navs/DefaultNav.vue';
import OsuForMusic from './items/OsuForMusic.vue';
import useOsuBackGround from '@/hooks/useOsuBackGround';
import { onMounted } from 'vue';
onMounted(() => {
    useOsuBackGround();
});
</script>

<style scoped>
.osu-options {
    position: fixed;
    left: 50%;
    transition: left;
    color: white;
}

main {
    background: black;
    background-size: 100%;
    opacity: 1;
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
}

.osu-block {
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background-color: black;
}

footer {
    z-index: 10;
    height: 20px;
    display: flex;
    background: black;
    align-items: end;
}

footer p {
    margin: 0;
    color: white;
}

.top {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100vh;
}
</style>