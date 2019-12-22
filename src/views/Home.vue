<template>
  <v-container ma-2>
    <v-row>
      <v-col>
        <h2> <v-icon>fa-door-closed</v-icon> Gestão de contratos</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>Aplicação para administração de contratos para controle e automação de armários e fechaduras eletrônicas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi nobis, molestias cumque et aliquid vero eveniet ducimus perferendis consectetur, dolorum neque minima sunt modi quia quis velit aliquam reiciendis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quibusdam illo explicabo ea corrupti. Fugiat, iure accusamus ducimus quisquam blanditiis ipsa fugit itaque rem doloremque aliquid voluptates nobis voluptate eaque.</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="4">
        <v-btn text color="primary" to="contracts/new">NOVO CONTRATO</v-btn>
        <v-btn text color="primary" to="contracts">MEUS CONTRATOS</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  }
}
</script>
