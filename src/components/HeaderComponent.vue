<template>
    <div>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click.stop="menu"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <router-link to="/" class="text-style font-weight-bold">LOOPBOX</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">

            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>


export default {
    name: 'header-component',
    data(){
        return {
            drawer: true,
            items: [
                {
                    action: 'local_activity',
                    title: 'Attractions',
                    path: '/',
                    items: [],
                },
                {
                    action: 'restaurant',
                    title: 'Breakfast',
                    path: '/breakfast',
                    items: []
                },
            ]
        }
    },
    methods: {
        menu() {
            this.$root.$emit('changeMenu')
        },

    },
}
</script>

<style scoped>

a {
    color: white;
    text-decoration: none;
}

.text-style {
  color: white;
  text-decoration: none;
  font-family: 'DDINRegular', Impact, Haettenschweiler, sans-serif

}
</style>
