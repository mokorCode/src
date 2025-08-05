<template>
    <main class="bg">
        <div class="mapSelector">
            <div class="maps-area" ref="mapsArea"></div>
            <div class="rank" ref="rank"></div>
        </div>
        <div class="top" ref="top">
            <div class="mapInf" ref="mapInf"></div>
            <div class="search" ref="search"></div>
        </div>
        <div class="outerBlock"></div>
        <div class="footer" ref="footer"></div>
    </main>

</template>

<script setup name='Options'>
import useInitViews from '@/hooks/useInitViews';
import { onMounted, ref } from 'vue';


const footer = ref(null);
const top = ref(null);
const mapInf = ref(null);
const search = ref(null);
const mapsArea = ref(null);
const rank = ref(null);

useInitViews(main);
function main() {
}
onMounted(() => {
    mapsArea.value.style.width = window.innerWidth - parseFloat(getComputedStyle(mapInf.value).width) + 'px'
    mapsArea.value.style.height = window.innerHeight - parseFloat(getComputedStyle(search.value).height) - parseFloat(getComputedStyle(footer.value).height) + 'px'

    rank.value.style.width = window.innerWidth - parseFloat(getComputedStyle(mapsArea.value).width) + 20 + 'px'
    rank.value.style.height = window.innerHeight - parseFloat(getComputedStyle(mapInf.value).height) - parseFloat(getComputedStyle(footer.value).height) + 'px'
});
window.onresize = () => {
    mapsArea.value.style.width = window.innerWidth - parseFloat(getComputedStyle(mapInf.value).width) + 'px'
    mapsArea.value.style.height = window.innerHeight - parseFloat(getComputedStyle(search.value).height) - parseFloat(getComputedStyle(footer.value).height) + 'px'

    rank.value.style.width = window.innerWidth - parseFloat(getComputedStyle(mapsArea.value).width) + 20 + 'px'
    rank.value.style.height = window.innerHeight - parseFloat(getComputedStyle(mapInf.value).height) - parseFloat(getComputedStyle(footer.value).height) + 'px'
};

</script>

<style scoped>
.rank {
    position: fixed;
    height: 500px;
    width: 500px;
    background: black;
    opacity: 0.5;
    border-right: 5px solid red;
    left: 0;
    transform: translateY(160px);
}

.mapSelector {
    position: fixed;
    width: 100vw;
    z-index: 3;
    height: 100vh;
}

.maps-area {
    position: fixed;
    border-radius: 32px 0 0 0;
    height: 500px;
    width: 500px;
    background: gray;
    opacity: 0.5;
    border-top: 8px solid rgb(65, 120, 193);
    right: 0;
    transform: translateY(100px);
}

.top {
    position: fixed;
    z-index: 4;
    justify-content: space-between;
    width: 100%;
    height: 160px;
}

.search {
    height: 100px;
    width: 73%;
    background: black;
    opacity: 0.8;
    backdrop-filter: blur(3px);
    position: fixed;
    right: 0;
}

.mapInf {
    position: fixed;
    height: 160px;
    width: 27%;
    background: black;
    opacity: 0.8;
    backdrop-filter: blur(3px);
    border-radius: 0 0 32px 0;
    border-bottom: 8px solid rgb(65, 120, 193);
}


.footer {
    position: fixed;
    background: black;
    opacity: 0.8;
    width: 100%;
    backdrop-filter: blur(3px);
    height: 85px;
    border-top: 8px solid rgb(65, 120, 193);
    z-index: 4;
    align-self: flex-end;
}

.bg {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    /* 或 cover */
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    background: black;
    background-size: 100%;
}

main {
    height: 100vh;
}
</style>