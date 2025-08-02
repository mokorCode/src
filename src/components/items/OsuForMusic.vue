<template>
    <div class="osu-for-manage">
        <img :src="defaultOsu" alt="OSU!">
    </div>
    <!-- <canvas class="osu-canvas"></canvas> -->
</template>

<script setup name='OsuForMusic'>
import defaultOsu from '@/assets/default-osu.svg'
import useMusicManage from '@/hooks/useOsuMusicManage'
window.onload = () => {
    useMusicManage();
    const osu = document.querySelector('.osu-for-manage');
    osu.onclick = () => { osu.classList.add('osu-tanslate') };
}
</script>

<style>
:root {
    --transform: scale(1.4);
}

.osu-for-manage {
    position: fixed;
    rotate: 0deg;
    box-shadow: 0 0 50px gray;
    left: 50%;
    z-index: 5;
    top: 50%;
    translate: -50% -50%;
    width: 480px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: left 1s ease-out;
    transform: var(--transform);
}

.osu-for-manage:hover {
    cursor: pointer;
}

.osu-tanslate {
    left: 35%;
}

.osu-left-light {
    position: fixed;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background: linear-gradient(to right, white 80%, rgba(255, 255, 255, 0.5));
    z-index: 1;
    filter: blue(30px);
    opacity: 0.9;
    animation: fadeLight 1s ease-out;
}

.osu-right-light {
    position: fixed;
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
    background: linear-gradient(to left, white 80%, rgba(255, 255, 255, 0.5));
    z-index: 1;
    filter: blue(30px);
    opacity: 0.9;
    animation: fadeLight 1s ease-out;
}

@keyframes fadeLight {
    from {
        opacity: 0.9;
    }

    to {
        opacity: 0;
    }
}

.osu-canvas {
    position: fixed;
    rotate: 0;
    left: 50%;
    top: 50%;
    z-index: 0;
    translate: -50% -50%;
    width: 500px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transform: var(--transform);
}
</style>