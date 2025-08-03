import Welcome from "@/components/Welcome.vue";
import Options from "@/components/Options.vue";
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
            component:Options
        },
        {
            path:'/tobecontinue',
            component:Options
        }
    ]
})

export default router


