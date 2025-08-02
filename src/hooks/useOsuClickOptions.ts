import { ref } from "vue";
export default function (refControls: any) {
    let isShowOptions = ref(false);
    function showOptions() {
        isShowOptions.value = true;
    }
    return {isShowOptions, showOptions};
};