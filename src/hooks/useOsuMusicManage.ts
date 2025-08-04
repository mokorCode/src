import myTheme from '@/assets/myTheme.mp3';
import virgil from '@/assets/virgil.mp3'
import welcome from '@/assets/welcome.mp3'
const musicList = [welcome,virgil,myTheme];
let p = 0;

export default function () {
    let audio = new Audio(musicList[p]);
    audio.onended = () => {
        p < musicList.length - 1 ? p += 1 : p = 0;
        console.log('完成！！久久！！完成！！ 切换下一首音乐...');
        audio.src = musicList[p];
        audio.play();
    };
    // 获取窗口音频上下文
    const audioContext = new window.AudioContext()

    // 对分析器初始化
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 32;
    const bufferLength = analyser.frequencyBinCount;
    // array 设置为节点数量长度
    let data = new Uint8Array(bufferLength);

    // 资源
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
            
    // 画布
    const canvas = document.createElement('canvas');
    canvas.classList.add('osu-canvas');
    // canvas.style.zIndex = '50'; ////////////////
    document.body.appendChild(canvas);
    canvas.width = parseFloat(getComputedStyle(canvas).width);
    
    canvas.height = parseFloat(getComputedStyle(canvas).height);
    const ctx = canvas.getContext('2d');
    ctx!.translate(canvas.width / 2, canvas.height / 2);
    const osu = document.querySelector('.osu-for-manage') as HTMLDivElement;
    const r = parseFloat(getComputedStyle(osu!).width) - 100;
    let circleDraw = 0;
    let lightPosition = 'left';
    function getAverage(arr: Uint8Array<ArrayBuffer>) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            count += arr[i];
        }
        return count / arr.length;
    };
    function light() {
        const lightElement = document.createElement('div');
        if (lightPosition == 'left') {
            lightElement.classList.add('osu-left-light');
            lightPosition = 'right';
        } else {
            lightElement.classList.add('osu-right-light');
            lightPosition = 'left';
        }
        document.body.appendChild(lightElement);
        setTimeout(() => {
            lightElement.remove();
        }, 1000)
    };
    function bounceLight() {
        let isStop = false;
        return () => {
            if (isStop) return;
            if (getAverage(data.slice(13, 14)) > 3) {
                light();
                isStop = true;
                setTimeout(() => {
                    isStop = false;
                }, 300);
            }
        }
    };
    let offset = 0;
    const runLight = bounceLight();
    function draw() {
        canvas.style.left = getComputedStyle(osu).left;
        osu.style.rotate = parseFloat(getComputedStyle(osu).rotate) + 0.2 + 'deg';
        analyser.getByteFrequencyData(data);
        ctx!.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        circleDraw += 360 / bufferLength;
            
        runLight();
        let x = 0;
        offset -= Math.PI / (1000 * 2);
        for (let i = 0; i < bufferLength; i++) {
            const val = data[i] / 255 * 50;
            ctx!.save();
            osu.style.scale = `${1 + val / 255 * 2}`;
            ctx!.rotate(Math.PI * i / bufferLength + offset);
            ctx!.fillStyle = `rgba(255,255,255,${1 - val / 255})`;
            ctx!.strokeStyle = `rgba(255,255,255,${1 - val / 255})`;
            ctx!.strokeRect(-10, r / 2, 30, val);
            ctx!.fillRect(0, r / 2, 10, val - 10);
            ctx!.restore();

            ctx!.save();
            osu.style.scale = `${1 + val / 255 * 2}`;
            ctx!.rotate(Math.PI * i / bufferLength + Math.PI + offset);
            ctx!.fillStyle = `rgba(255,255,255,${1 - val / 255})`;
            ctx!.strokeStyle = `rgba(255,255,255,${1 - val / 255})`;
            ctx!.strokeRect(-10, r / 2, 30, val);
            ctx!.fillRect(0, r / 2, 10, val - 10);
            ctx!.restore();

            ctx!.save();
            ctx!.translate(-100, 0);
            ctx!.fillStyle = 'rgb(0, 255,255)';
            ctx!.fillRect(x, canvas.height / 5, 2, -val);
            x += canvas.width / (bufferLength * 3) + 1;
            ctx!.restore();
        };
        requestAnimationFrame(draw);
        
    };
    audio.volume = 0.5;
    audio.play();
    
    draw();
    function osuMusicUnmount() {
        if (!audio.paused) audio.pause();
        audio.remove();
        canvas.remove();
    };
    return {osuMusicUnmount}
    
};


