import { defineStore } from "pinia";
export default defineStore('useMapDatasStore', () => {
    const osuMaps = new Map<File, Array<any>>();


    function setMaps(song: File, ...maps: File[]) {
        osuMaps.set(song, []);
        for (let i of maps) {
            osuMaps.get(song)!.push(i);
        }
    }


    return { osuMaps,setMaps };
});