import { shallowMount } from "@vue/test-utils"
import Vue from "vue"
import VueRouter from "vue-router"
import BootstrapVue from "bootstrap-vue"
Vue.use(BootstrapVue)
Vue.use(VueRouter)
import MyPokedex from "@/pages/MyPokedex/MyPokedex.vue"

let pokedexWrapper

const wrapsPokedex = () => {
    pokedexWrapper = shallowMount(MyPokedex)
}

const setPokemon = () => {
    pokedexWrapper.setData({
        pokemons: [
            {
                abilities: [
                    {
                        ability: {
                            name: "overgrow",
                            url: "https://pokeapi.co/api/v2/ability/65/",
                        },
                        is_hidden: false,
                        slot: 1,
                    },
                    {
                        ability: {
                            name: "chlorophyll",
                            url: "https://pokeapi.co/api/v2/ability/34/",
                        },
                        is_hidden: true,
                        slot: 3,
                    },
                ],
                id: 1,
                name: "bulbasaur",
                order: 1,
                sprites: {
                    front_default:
                        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                },
                stats: [
                    {
                        base_stat: 45,
                        effort: 0,
                        stat: {
                            name: "hp",
                            url: "https://pokeapi.co/api/v2/stat/1/",
                        },
                    },
                    {
                        base_stat: 49,
                        effort: 0,
                        stat: {
                            name: "attack",
                            url: "https://pokeapi.co/api/v2/stat/2/",
                        },
                    },
                    {
                        base_stat: 49,
                        effort: 0,
                        stat: {
                            name: "defense",
                            url: "https://pokeapi.co/api/v2/stat/3/",
                        },
                    },
                    {
                        base_stat: 65,
                        effort: 1,
                        stat: {
                            name: "special-attack",
                            url: "https://pokeapi.co/api/v2/stat/4/",
                        },
                    },
                    {
                        base_stat: 65,
                        effort: 0,
                        stat: {
                            name: "special-defense",
                            url: "https://pokeapi.co/api/v2/stat/5/",
                        },
                    },
                    {
                        base_stat: 45,
                        effort: 0,
                        stat: {
                            name: "speed",
                            url: "https://pokeapi.co/api/v2/stat/6/",
                        },
                    },
                ],
                types: [
                    {
                        slot: 1,
                        type: {
                            name: "grass",
                            url: "https://pokeapi.co/api/v2/type/12/",
                        },
                    },
                    {
                        slot: 2,
                        type: {
                            name: "poison",
                            url: "https://pokeapi.co/api/v2/type/4/",
                        },
                    },
                ],
                weight: 69,
            },
        ],
    })
}

const cleanData = () => {
    pokedexWrapper.setData({
        pokemons: [],
    })    
}

describe("MyPokedex.vue", () => {

    beforeAll(() => {
        wrapsPokedex()
        setPokemon()
    })

    it("Should render MyPokedex", () => {
        expect(pokedexWrapper.exists()).toBe(true)
    })

    it("Should render Pokemon info", () => {
        expect(pokedexWrapper.text()).toContain("#1 bulbasaur")
        cleanData()
    })    

    it("Message 'pokemon list empty' should appears", () => {
        expect(pokedexWrapper.text()).toContain(
            "Você ainda não possui nenhum Pokémon capturado."
        )
    })
})
