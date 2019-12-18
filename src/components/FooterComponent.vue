<template>
  <v-footer dark class="pa-3 footer-size primary">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }} - Administração do CANIE CECAV/ICMBio</div>
    <!-- <v-img :src="cecavDark" alt="logo cecav" max-width="80"></v-img> -->
  </v-footer>
</template>

<script>
import cecavLigth from '../public/images/logo-cecav-ligth.png'
import cecavDark from '../public/images/logo-cecav-dark.png'

export default {
    name: 'FooterComponent',
    data() {
        return {
            cecavLigth,
            cecavDark
        }
    },
    computed: {
        logo() {
            if(this.$store.state.invert) {
                return cecavDark;
            }
            return cecavLigth;

        }
    }
}

</script>

<style>
.footer-size {
    min-height: 60px;
}
</style>
