import bg1 from '@/assets/bgs/1.jpg';
import bg2 from '@/assets/bgs/2.jpg';
import bg3 from '@/assets/bgs/3.jpg';
import bg4 from '@/assets/bgs/4.jpg';
import bg5 from '@/assets/bgs/5.jpg';
import bg6 from '@/assets/bgs/6.jpg';
import bg7 from '@/assets/bgs/7.jpg';
import bg8 from '@/assets/bgs/8.jpg';
import bg9 from '@/assets/bgs/9.jpg';
import bg10 from '@/assets/bgs/10.jpg';
import bg11 from '@/assets/bgs/11.jpg';
const bgList = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11];
bgList.forEach(bg => { 
    const img = new Image();
    img.src = bg;
});
const num = Math.floor(Math.random() * bgList.length);
const presentBg = bgList[num];

export default function () {
    const bg = document.querySelector('.osu-main');
    (bg as HTMLDivElement).style.backgroundImage = `url('${presentBg}')`
};