import Welcome from "@/components/Welcome.vue";
import { createRouter,createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
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


