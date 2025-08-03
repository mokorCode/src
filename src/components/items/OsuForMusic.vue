<template>
    <div class="osu-for-manage" ref="osuManage">
        <img @click="onClickOsu" ref="img" :src="defaultOsu" alt="OSU!">
    </div>
    <div v-if="isShowOptions" ref="controls" class="container">
        <RouterLink class="play controls" to="/play">Play
        </RouterLink>
        <RouterLink class="idk controls" to="/tobecontinue">
            <marquee>To be continue</marquee>
        </RouterLink>
        <RouterLink class="options controls" to="/options">Options
        </RouterLink>
    </div>
    <!-- <canvas class="osu-canvas"></canvas> -->
</template>

<script setup name='OsuForMusic'>
import defaultOsu from '@/assets/default-osu.svg'
import { ref } from 'vue';
import { nextTick, defineProps } from 'vue';
import { RouterLink } from 'vue-router';
const { osuInit } = defineProps(['osuInit']);


let controls = ref(null);
let img = ref(null);
let osuManage = ref(null);
const { isShowOptions, showOptions } = osuInit(img, controls);


function onClickOsu() {
    showOptions();
    osuManage.value.style.pointerEvents = 'none';
    nextTick(() => {
        setTimeout(() => { controls.value.classList.add('container-translate'); }, 500)
    });
    osuManage.value.classList.add('osu-translate');
};

</script>

<style>
:root {
    --transform: scale(1.4);
}

.container {
    display: flex;
    position: fixed;
    left: 50%;
    top: 50%;
    flex-direction: column;
    z-index: 0;
    user-select: none;
    height: 60%;
    transition: transform 0.5s ease;
    transform: translate(-50%, -50%);
    /* background: cyan; */
    justify-content: center;
    align-items: center;

}

.controls {
    display: flex;
    font-size: 58px;
    font-weight: 800;
    cursor: pointer;
    width: 500px;
    height: 100px;
    color: pink;
    line-height: 45px;
    border: 5px solid rgb(247, 128, 211);
    background: linear-gradient(45deg, aqua, blue);
    margin-top: 16px;
    transition: transform 0.5s ease;
    flex-direction: column;
    align-items: end;

}

.play {
    border-radius: 0 128px 32px 0;
}

.options {
    border-radius: 0 32px 128px 0;
}

.idk {
    border-radius: 0 32px 32px 0;
    font-size: 48px;
}

.container-translate .controls {
    transform: translate(20%);
}

.controls:hover {
    transform: translate(40%);
}

.osu-for-manage {
    position: fixed;
    rotate: 0deg;
    z-index: 5;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 480px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: left 0.5s ease-out;
    transform: var(--transform);
}


.osu-for-manage:hover {
    cursor: pointer;
}

.osu-translate {
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
        opacity: 0.8;
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
    pointer-events: none;
    translate: -50% -50%;
    width: 500px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transform: var(--transform);
}
</style>