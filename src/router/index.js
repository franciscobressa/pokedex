import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const MyPokedex = () =>
    import ("@/pages/MyPokedex/MyPokedex.vue")
const CapturePokemons = () =>
    import ("@/pages/CapturePokemons/CapturePokemons.vue")
const Search = () =>
    import ("@/pages/Search/Search.vue")
const SearchByType = () =>
    import ("@/pages/Search/SearchByType.vue")

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            name: "MyPokedex",
            component: MyPokedex,
        },
        {
            path: "/capture",
            name: "CapturePokemons",
            component: CapturePokemons,
        },
        {
            path: "/search",
            name: "Search",
            component: Search,
            props: true,
        },
        {
            path: "/search/:type",
            name: "SearchByType",
            component: SearchByType,
            props: true,
        }

    ],
})

export default router