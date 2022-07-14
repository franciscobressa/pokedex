<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-brand href="#">
            <img
                alt="Brand"
                src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
                height="50"
            />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <ul class="mx-auto text-center navbar-items">
                <li class="navbar-item" href="#">
                    <router-link to="/">MINHA POKÉDEX</router-link>
                </li>
                <li class="navbar-item" href="#">
                    <router-link to="/capture">CAPTURAR POKÉMONS</router-link>
                </li>
            </ul>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form class="d-none d-lg-block">
                    <b-form-input
                        size="sm"
                        placeholder="Nome ou ID"
                        v-model="searchField"
                    ></b-form-input>
                    <b-button
                        size="sm"
                        variant="danger"
                        @click="search()"
                    >
                        <b-icon icon="search" color="#fff"> </b-icon>
                    </b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "PokedexNavbar",

        data() {
            return {
                searchField: "",
            };
        },

        methods: {
            search() {
                this.$router.push({
                    name: "Search",
                    params: {
                        searchField: this.searchField,
                    },
                });
            },
        },
    }
</script>

<style scoped>
    .navbar {
        background-color: rgba(19, 19, 19, 0.9) rtant;
    }
    .navbar-items {
        justify-content: center;
        display: inline-flex;
        list-style: none;
        margin: 0;
    }
    .navbar-item {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 500;
        margin: 0 1em;
    }

    a {
        color: #fff;
    }

    a:hover {
        color: #dc3545;
        text-decoration: none;
    }
</style>
