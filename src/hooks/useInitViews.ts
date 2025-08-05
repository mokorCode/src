export default function (main:Function) {
    const block: HTMLElement = document.createElement('div');
    block!.classList.add('fade-out-block');
    document.body.appendChild(block!);
    block!.onanimationend = () => {
        main();
        block.remove();
        block!.onanimationend = null; // 永远的坑
    }
};