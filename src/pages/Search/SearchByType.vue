<template>
    <div>
        <Navbar />
        <div class="mx-auto content mb-3 text-center">
            <h2 class="text-center">Pokemons do tipo {{type}}</h2>
            <small>Clique para exibir mais detalhes</small>
            <hr class="my-4" />
            <li
                v-for="(pokemon, index) in pokemons[0]"
                :key="index"
            >
            <router-link
                :to="{ name: 'Search', params: { searchField: pokemon.pokemon.name } }"
            >
            <h4>{{pokemon.pokemon.name}}</h4>
            </router-link>
            </li>
        </div>
    </div>
</template>

<style scoped>
    .content {
        margin: 0 auto;
        width: 90%;
        background-color: rgba(19, 19, 19, 0.9);
        padding: 2em;
        position: relative;
        margin-top: 2em;
        color: #fff;
    }

    .picture-frame {
        border-radius: 5%;
        width: 200px;
        height: 200px;
        margin-bottom: 1em;
        background-color: #fff;
    }

    .picture-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .pagination-controlers {
        font-size: 1.5em;
        cursor: pointer;
    }

    .badge-text {
        font-size: 2em;
        font-weight: 100;
        color: #fff;
    }

    a {
        color: #dc3545;
    }

    .card {
        background-color: transparent !important;
        border: 1px solid #fff;
    }

    li {
        list-style: none;
    }
    
    @media screen and (max-width: 768px) {
        .content {
            width: 95%;
        }
    }
</style>

<script>
    import services from "@/services"
    import store from "@/store"
    import Navbar from "@/components/Navbar.vue"

    export default {
        name: "SearchByType",

        components: {
            Navbar,
        },

        props: {
            urlType: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
            }
        },

        data: () => ({
            pokemons: [],
            timeout: null,
        }),

        methods: {
            async getPokemonByType() {
                await services.getPokemonByType(this.urlType).then(data => {
                    this.pokemons.push(data.pokemon)
                })
            },

            async capturarPokemon(pokemon) {
                store.dispatch("addPokemonToMyPokemons", pokemon)
            },

            variantTypePokemon(type) {
                switch (type) {
                    case "normal":
                        return "primary"
                    case "fighting":
                        return "danger"
                    case "flying":
                        return "info"
                    case "poison":
                        return "warning"
                    case "ground":
                        return "success"
                    case "rock":
                        return "dark"
                    case "bug":
                        return "secondary"
                    case "ghost":
                        return "dark"
                    case "steel":
                        return "dark"
                    case "fire":
                        return "danger"
                    case "water":
                        return "info"
                    case "grass":
                        return "success"
                    case "electric":
                        return "warning"
                    case "psychic":
                        return "danger"
                    case "ice":
                        return "info"
                    case "dragon":
                        return "warning"
                    case "dark":
                        return "dark"
                    case "fairy":
                        return "secondary"
                    default:
                        return "primary"
                }
            },
        },

        mounted() {
            this.getPokemonByType()
        },
    }
</script>
