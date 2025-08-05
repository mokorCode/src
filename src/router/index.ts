import Welcome from "@/components/Welcome.vue";
import Options from "@/views/Options.vue";
import Play from "@/views/Play.vue";
import Idk from "@/views/Idk.vue";
import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect:'/welcome'
        },
        {
            path:'/welcome',
            component:Welcome
        },
        {
            path:'/options',
            component:Options
        },
        {
            path:'/play',
            component:Play
        },
        {
            path:'/tobecontinue',
            component:Idk
        }
    ]
})

export default router


