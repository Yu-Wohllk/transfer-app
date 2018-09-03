<template>
  <v-card>
    <v-card-title>
      <h4>Datos Cuenta Destino</h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Titular: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentDestinataryAccount.accountData.headline }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Rut: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentDestinataryAccount.accountData.rut }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Banco: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentDestinataryAccount.accountData.bankName }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Tipo Cuenta: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentDestinataryAccount.accountData.accountType }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Nº Cuenta: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentDestinataryAccount.accountData.accountNumber }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>Email: </v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ currentDestinataryAccount.accountData.email }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>

export default {
  props : {
    currentDestinataryAccount : {
      type : Object,
      required : true
    }
  }
}
</script>

<style lang="scss">

</style>
