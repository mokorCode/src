
export default function (block: any, welcome:any, osuBlock:any) {
    window.onclick = () => {
        block.value.style.animation = 'none';
        welcome.value.style.animation = 'osu-welcome 5s ease 1 alternate forwards';
        welcome.value.querySelectorAll('span').forEach((Element: any) => {
            Element.style.animation = 'osu-welcome-span 6s cubic-bezier(0.15, 0.72, 0.40, 0.90) 1 alternate forwards';
        });
        setTimeout(() => {
            block.value.style.animation = 'osu-block-remove 0.5s cubic-bezier(0.15, 0.72, 0.40, 0.90) 1 alternate forwards';
            welcome.value.remove();
            osuBlock.value.style.animation = 'osu-block-light 2s ease-out 1 alternate forwards';
        }, 6000)
        window.onclick = null;
    }
};