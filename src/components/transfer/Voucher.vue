<template>
  <v-container>
    <v-alert
          :value="true"
          type="success"
        >
          Transferencia Realizada Correctamente - N° Transaccion : {{ transactionNumber() }}
        </v-alert>
    <v-card>
      <v-card-title>
        <h4>Datos Transferencia</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>Cuenta Origen: </v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ currentAccount.number }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>Monto: </v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ amount | currency }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>Cuenta Destino : </v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ currentDestinataryAccount.accountData.accountNumber }}
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
          <v-list-tile-content>Nombre: </v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ currentDestinataryAccount.accountData.headline }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>Fecha: </v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ date() }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>Hora: </v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ hour() }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>

export default {
  props : {
    currentAccount : {
      type : Object,
    },
    currentDestinataryAccount : {
      type : Object,
    },
    amount : {
      type : Number,
      required : true
    }
  },
  methods : {
    date () {
      return new Date().toLocaleDateString();
    },
    hour () {
      return new Date().toLocaleTimeString();
    },
    transactionNumber () {
      return Math.floor((Math.random() * 99999999) + 1);
    }
  }
}

</script>

<style lang="scss">

</style>
