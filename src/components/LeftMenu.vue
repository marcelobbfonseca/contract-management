<template>
    <v-navigation-drawer v-model="drawer" app width="320">
        <!-- <v-img :src="logo" alt="logo canie" contain></v-img> -->

        <v-divider></v-divider>

        <v-list ligth>
            <v-list-item v-for="item in items" :key="item.title" :to="item.route">

                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-title text>{{ item.title }}</v-list-item-title>

            </v-list-item>


            <v-list-group prepend-icon="fa-user-shield" no-action>
                <template v-slot:activator>
                    <v-list-item-title>Admin</v-list-item-title>
                </template>

                    <v-list-item v-for="item in adminItems" :key="item.title" :to="item.route" >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>
                            {{item.title}}
                        </v-list-item-title>
                    </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

import logoCanie from '../public/images/logo-canie-flashlight.png'

  export default {
      name: 'Leftmenu',
      mounted() {
          this.$root.$on('changeMenu', () => {
              this.drawer = !this.drawer;
          });
      },
      data () {
          return {
              drawer: true,
              logoCanie,
              items: [
                  { title: 'Inicio', icon: 'fa-home', route: '/'},
                  { title: 'Enviar Projeto', icon: 'fa-upload', route: '/projetos/novo'},
                  { title: 'Meus projetos', icon: 'fa-file-alt', route: '/projetos'},
              ],
              adminItems: [
                  { title: 'Projetos', icon: 'fa-folder', route: '/projetos' },
                  { title: 'Usuarios', icon: 'fa-users', route: '/usuario' },
              ],
          };
      },
      computed: {
            logo() {
                if(this.$store.state.invert)
                    return logoCanie;
                else
                    return logoCanie;
            }
      }
  }
</script>
