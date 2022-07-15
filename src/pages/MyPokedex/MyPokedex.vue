<template>
    <div>
        <Navbar />
        <div class="mx-auto content mb-3">
            <h2 class="text-center">Minha Pokédex</h2>
            <hr class="my-4" />
            <template v-if="pokemons.length > 0">
                <b-card
                    v-for="(pokemon, index) in pokemons"
                    :key="index"
                    class="mb-5"
                >
                    <b-card-header
                        class="d-flex flex-wrap justify-content-between px-0"
                    >
                        <b-card-title class="col-md-6 text-center text-md-left">
                            #{{ pokemon.id }} {{ pokemon.name }}
                        </b-card-title>
                        <b-button
                            size="sm"
                            variant="danger"
                            type="submit"
                            class="col-md-3"
                            id="delete-pokemon"
                            @click="libertarPokemon(pokemon)"
                        >
                            Libertar Pokémon
                        </b-button>
                    </b-card-header>
                    <b-card-body>
                        <div
                            class="row d-flex align-items-center justify-content-around"
                        >
                            <div class="col-md-3 mb-5 mb-md-0">
                                <div class="wrap m-auto" style="width: 200px">
                                    <div class="picture-frame m-auto">
                                        <img
                                            :src="pokemon.sprites.front_default"
                                        />
                                    </div>

                                    <div
                                        class="badges d-flex justify-content-around mt-2"
                                    >
                                        <router-link
                                            v-for="type in pokemon.types"
                                            :key="type.type.name"
                                            :to="{
                                                name: 'SearchByType',
                                                params: {
                                                    type: type.type.name,
                                                    urlType: type.type.url,
                                                },
                                            }"
                                        >
                                            <b-badge
                                                :variant="
                                                    variantTypePokemon(
                                                        type.type.name
                                                    )
                                                "
                                            >
                                                <span class="badge-text">{{
                                                    type.type.name
                                                }}</span>
                                            </b-badge>
                                        </router-link>
                                    </div>
                                    <b-button
                                        size="sm"
                                        variant="danger"
                                        type="submit"
                                        class="col-12 mt-2"
                                        v-b-modal.modal-1
                                        @click="selectPokemon(pokemon)"
                                    >
                                        Editar imagem
                                    </b-button>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-5">
                                <div class="pokemon-info">
                                    <div class="pokemon-info d-none d-md-block">
                                        <div
                                            v-for="stat in pokemon.stats"
                                            :key="stat.stat.url"
                                            class="d-flex justify-content-between px-0"
                                        >
                                            {{ stat.stat.name }}:

                                            <b-progress
                                                class="mt-2 w-50"
                                                max="100"
                                                show-value
                                            >
                                                <b-progress-bar
                                                    :value="stat.base_stat"
                                                    variant="danger"
                                                ></b-progress-bar>
                                            </b-progress>
                                        </div>
                                        <div
                                            class="d-flex justify-content-between px-0"
                                        >
                                            weight:
                                            <span class="w-50 text-center">{{
                                                pokemon.weight
                                            }}</span>
                                        </div>
                                    </div>
                                    <div class="pokemon-info d-block d-md-none">
                                        <div
                                            v-for="stat in pokemon.stats"
                                            :key="stat.stat.url"
                                            class="d-flex flex-wrap justify-content-center px-0"
                                        >
                                            <div
                                                class="stat-name text-center col-12"
                                            >
                                                {{ stat.stat.name }}
                                            </div>

                                            <b-progress
                                                class="mb-3 w-100"
                                                max="100"
                                                show-value
                                            >
                                                <b-progress-bar
                                                    :value="stat.base_stat"
                                                    variant="danger"
                                                ></b-progress-bar>
                                            </b-progress>
                                        </div>
                                        <div
                                            class="d-flex flex-wrap justify-content-center px-0"
                                        >
                                            <div
                                                class="stat-name text-center col-12"
                                            >
                                                weight
                                            </div>
                                            <span class="w-100 text-center">{{
                                                pokemon.weight
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5 pt-3">
                            <div class="col-md-12">
                                <h3 class="text-center">Habilidades</h3>
                                <div class="abilitiess">
                                    <div class="text-center">
                                        <ol>
                                            <li
                                                v-for="(
                                                    abilities, index
                                                ) in pokemon.abilities"
                                                :key="index"
                                                style="font-size: 1.2rem"
                                            >
                                                {{ abilities.ability.name }}
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5 pt-3">
                            <div class="col-md-12">
                                <h3 class="text-center mb-4">
                                    Cadeia de Evolução
                                </h3>
                                <div
                                    class="col-9 mx-auto d-flex justify-content-between flex-wrap pl-md-5"
                                >
                                    <div
                                        class="d-flex col-12 col-md-4 justify-content-center justify-content-md-around flex-wrap align-items-center pl-md-5"
                                        v-for="(
                                            level, index
                                        ) in pokemon.evolution_chain"
                                        :key="index"
                                    >
                                        <div
                                            class="text-center d-flex justify-content-between align-items-center"
                                            v-for="pokemon in level"
                                            :key="pokemon.name"
                                        >
                                            <div
                                                class="pokemon-info-wrapper mr-3"
                                            >
                                                <div
                                                    class="picture-frame"
                                                    style="
                                                        height: 90px;
                                                        width: 90px;
                                                    "
                                                >
                                                    <img
                                                        :src="
                                                            pokemon.sprites
                                                                .front_default
                                                        "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="evo-arrow ml-5 mb-4 d-none d-md-block"
                                            style="height: 20px; width: 20px"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="arrow-right"
                                                class="svg-inline--fa fa-arrow-right fa-w-14"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                v-if="
                                                    index + 1 !=
                                                    pokemon.evolution_chain
                                                        .length
                                                "
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </template>
            <template v-else>
                <h5 class="text-center">
                    Você ainda não possui nenhum Pokémon capturado.<br />
                    <router-link to="capture" id="capture-pokemon-link">Capture um Pokémon</router-link>
                    para tê-lo em sua Pokédex
                </h5>
            </template>
        </div>
        <b-modal
            v-if="selectedPokemon"
            id="modal-1"
            :title="selectedPokemon.name"
        >
            <div class="picture-frame m-auto">
                <img :src="selectedPokemon.sprites.front_default" />
            </div>
            <b-form-input
                v-model="newSpriteUrl"
                placeholder="Cole aqui a url da imagem"
            ></b-form-input>
            <template #modal-footer>
                <div class="w-100">
                    <b-button
                        variant="danger"
                        size="sm"
                        class="float-right text-white"
                        @click="editFrontDefaultSprite()"
                    >
                        Confirmar alteração
                    </b-button>
                </div>
            </template>
        </b-modal>
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

    @media screen and (max-width: 768px) {
        .content {
            width: 95%;
        }
    }
</style>

<script>
    import store from "@/store"
    import Navbar from "@/components/Navbar.vue"

    export default {
        name: "App",

        components: {
            Navbar,
        },

        data: () => ({
            pokemons: [],
            newSpriteUrl: "",
            selectedPokemon: null,
        }),

        methods: {
            libertarPokemon(pokemon) {
                store.dispatch("removePokemonFromMyPokemons", pokemon)
            },

            editFrontDefaultSprite() {
                store.dispatch("editFrontDefaultSprite", {
                    pokemon: this.selectedPokemon,
                    newSpriteUrl: this.newSpriteUrl,
                })
                this.newSpriteUrl = ""
                this.selectedPokemon = null
            },

            selectPokemon(pokemon) {
                this.selectedPokemon = pokemon
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
            this.selectedPokemon = null
            this.pokemons = store.state.myPokemons
        },
    }
</script>
