import { createRouter, createWebHistory } from "vue-router";
import ResultsSet from '/src/components/ResultsSet.vue'
import SearchBar from '/src/components/SearchBar.vue'

const routes = [
    {
        path:'/',
        component: SearchBar
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router