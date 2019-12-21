<template>
    <div>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click.stop="menu"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <router-link to="/" class="text-style font-weight-bold">SMART LOCKER</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">

                <v-btn text center @click="'hi'">
                        <v-icon color="white">
                            fa-adjust
                        </v-icon>
                </v-btn>
                <v-tooltip v-if="false" bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn :to="{name: 'SignIn' }" icon large v-on="on" >
                            <v-icon>fa-user</v-icon>
                        </v-btn>
                    </template>
                    <span>Ver Perfil</span>
                </v-tooltip>
                <v-tooltip v-else bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn :to="{name: 'SignIn' }" icon large v-on="on" >
                            <v-icon>fa-sign-in-alt</v-icon>
                        </v-btn>
                    </template>
                    <span>Entrar no Sistema</span>
                </v-tooltip>

                <v-btn text center>
                    <v-img small src=""></v-img>
                </v-btn>

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
