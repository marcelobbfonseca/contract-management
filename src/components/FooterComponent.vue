<template>
  <v-footer dark class="pa-3 footer-size primary">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }} - Administração LoopBox</div>
    <!-- <v-img :src="cecavDark" alt="logo cecav" max-width="80"></v-img> -->
  </v-footer>
</template>

<script>

export default {
    name: 'FooterComponent',
    data() {
        return {
        }
    },
    computed: {

    }
}

</script>

<style>
.footer-size {
    min-height: 60px;
}
</style>
