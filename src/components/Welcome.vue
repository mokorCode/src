<template>
    <div class="top">
        <div ref="osuWelcome" class="osu-welcome">
            <span>w</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
        </div>
        <div ref="topBlock" class="top-block"></div>
        <DefaultNav />
        <main class="osu-main">
            <div ref="osuBlock" class="osu-block"></div>
            <OsuForMusic :osuInit=osuInit />
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
import { onMounted, onUnmounted, ref } from 'vue';
import useOsuReady from '@/hooks/useOsuReady';
import useOsuClickOptions from '@/hooks/useOsuClickOptions';


let osuBlock = ref(null);
let topBlock = ref(null);
let osuWelcome = ref(null);
let osuMusicUnmount = null;


function osuInit(img, controls) {
    return useOsuClickOptions(img, controls);
}

onMounted(async () => {
    if (performance.getEntriesByType('navigation')[0].type != 'navigate') {
        osuWelcome.value.remove();
        topBlock.value.style.opacity = 0;
        osuBlock.value.style.animation = 'osu-block-light 2s ease-out 1 alternate forwards';
    };
    useOsuBackGround();
    osuMusicUnmount = (await useOsuReady(topBlock, osuWelcome, osuBlock)).osuMusicUnmount;
    console.log('osuMusicUncount: ', osuMusicUnmount);

});
window.onbeforeunload = () => {

}
onUnmounted(() => {
    console.log('卸载欢迎页内容 ', osuMusicUnmount);
    if (osuMusicUnmount) osuMusicUnmount();
});

</script>

<style>
@keyframes osu-welcome {
    0% {
        opacity: 0;
        box-shadow: 0 0 0px cyan;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        box-shadow: 0 0 20px cyan;
        border: 1px solid cyan;
        color: skyblue;
        text-shadow: 0 0px 20px cyan;
    }
}

@keyframes osu-welcome-span {
    0% {
        margin: 0 2px;
    }

    100% {
        margin: 0 40px;
    }

}

@keyframes osu-block-light {
    0% {
        opacity: 0;
    }

    60% {
        opacity: 0.1;
    }

    100% {
        opacity: 0.5;
    }

}

@keyframes osu-block-remove {
    100% {
        opacity: 0;
    }

}
</style>
<style scoped>
.osu-options {
    position: fixed;
    left: 50%;
    transition: left;
    color: white;
}


.osu-welcome {
    width: 60%;
    aspect-ratio: 1/1;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 64px;
    align-items: center;
    justify-content: center;
    position: fixed;
    opacity: 1;
    border-radius: 50%;
    z-index: 101;
}



.top-block {
    position: fixed;
    z-index: 100;
    pointer-events: none;
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: black;
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