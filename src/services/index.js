import axios from "axios"

const getPokemon = async id => {
    let pokemons,
        evolution_chain_url,
        evolution_chain = null

    await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(response => {
            pokemons = response.data
        })
        .catch(error => {
            console.log(error)
        })

    evolution_chain_url = await getEvolutionChainUrl(id)
    evolution_chain = await getEvolutionChain(evolution_chain_url)
    Object.assign(pokemons, { evolution_chain })
    return pokemons
}

const getPokemonWithoutEvolutionChain = async id => {
    let pokemon = "null"
    await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(response => {
            pokemon = response.data
        })
        .catch(error => {
            console.log(error)
        })

    return pokemon
}

const getEvolutionChainUrl = async id => {
    let evolution_chain_url = ""
    await axios
        .get("https://pokeapi.co/api/v2/pokemon-species/" + id)
        .then(response => {
            evolution_chain_url = response.data.evolution_chain.url
        })
        .catch(error => {
            console.log(error)
        })

    return evolution_chain_url
}

const getEvolutionChain = async url => {
    let level1 = [],
        level2 = [],
        level3 = []

    let chain = null
    let evolution_chain = []

    await axios
        .get(url)
        .then(async response => {
            chain = response.data.chain

            if (chain.species) {
                let pokemon_aux = await getPokemonWithoutEvolutionChain(chain.species.name)
                level1.push(pokemon_aux)
                evolution_chain.push(level1)
            }

            if (
                chain.evolves_to.length !== 0 &&
                chain.evolves_to[0].species.url
            ) {
                for (let i = 0; i < chain.evolves_to.length; i++) {
                    let pokemon_aux = await getPokemonWithoutEvolutionChain(
                        chain.evolves_to[i].species.url.split("/")[6]
                    )

                    level2.push(pokemon_aux)
                }
                evolution_chain.push(level2)
            }

            if (
                chain.evolves_to.length !== 0 &&
                chain.evolves_to[0].evolves_to.length !== 0 &&
                chain.evolves_to[0].evolves_to[0].species.url
            ) {
                for (let i = 0; i < chain.evolves_to.length; i++) {
                    let pokemon_aux = await getPokemonWithoutEvolutionChain(
                        chain.evolves_to[0].evolves_to[0].species.name
                    )

                    level3.push(pokemon_aux)
                }
                evolution_chain.push(level3)
            }
        })
        .catch(error => {
            console.log(error)
        })

    return evolution_chain
}

const getPokemonByType = async url => {
    const response = await axios.get(url)
    return response.data
}

export default {
    getPokemon,
    getPokemonByType,
    getEvolutionChain,
    getEvolutionChainUrl,
}