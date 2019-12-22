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

        </v-list>
    </v-navigation-drawer>
</template>

<script>

  export default {
      name: 'Leftmenu',
      data () {
          return {
              drawer: true,
              items: [
                  { title: 'Inicio', icon: 'fa-home', route: '/'},
                  { title: 'Novo contrato', icon: 'fa-upload', route: '/contracts/new'},
                  { title: 'Meus contratos', icon: 'fa-file-alt', route: '/contracts'},
              ],
              adminItems: [
                  { title: 'Contratos', icon: 'fa-folder', route: '/contracts' },
                  { title: 'Clientes', icon: 'fa-users', route: '/clients' },
              ],
          };
      },
      mounted() {
          this.$root.$on('changeMenu', () => {
              this.drawer = !this.drawer;
          });
      },
      computed: {
      }
  }
</script>
