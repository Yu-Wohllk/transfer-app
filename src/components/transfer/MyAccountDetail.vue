<template>
  <v-card>
    <v-card-title>
      <h4>Datos de tu cuenta</h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Saldo: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentAccount.accountBalance | currency }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Linea de Crédito: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentAccount.creditLine | currency}}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Total: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentAccount.accountBalance + currentAccount.creditLine | currency }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>

export default {
  props : {
    currentAccount : {
      type : Object,
      required : true
    }
  }
}
</script>

<style lang="scss">

</style>
