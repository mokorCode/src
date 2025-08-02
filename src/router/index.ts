import Welcome from "@/components/Welcome.vue";
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
        }
    ]
})

export default router


