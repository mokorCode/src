import router from "@/router";

export default function (url: string) {
    const block: HTMLElement = document.createElement('div');
    block!.classList.add('fade-in-block');
    document.body.appendChild(block!);
    block!.onanimationend = () => {
        router.push(url);
        block.remove();
        block!.onanimationend = null; // 永远的坑
    }
}