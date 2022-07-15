import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        myPokemons: [],
    },
    getters: {
        myPokemons: state => state.myPokemons,
    },
    mutations: {
        addPokemonToMyPokemons(state, pokemon) {
            state.myPokemons.push(pokemon)
        },

        removePokemonFromMyPokemons(state, pokemon) {
            state.myPokemons.splice(state.myPokemons.indexOf(pokemon), 1)
        },

        editFrontDefaultSprite(state, pokemon) {
            state.myPokemons[
                state.myPokemons.indexOf(pokemon.pokemon)
            ].sprites.front_default = pokemon.newSpriteUrl
        }

    },
    actions: {
        addPokemonToMyPokemons({ commit }, pokemon) {
            commit("addPokemonToMyPokemons", pokemon)
        },

        removePokemonFromMyPokemons({ commit }, pokemon) {
            commit("removePokemonFromMyPokemons", pokemon)
        },

        editFrontDefaultSprite({ commit }, pokemon) {
            commit("editFrontDefaultSprite", pokemon)
        }
    },
    modules: {},
    plugins: [createPersistedState()]
})