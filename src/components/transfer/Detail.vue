<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3>Datos de la Transferencia</h3>
        </div>
      </v-card-title>
    </v-card>
    <v-form v-model="valid">
      <v-select
        item-text="number"
        item-value="id"
        :items="accountData.accounts"
        v-model="accountId"
        label="Seleccione una cuenta"
        solo
        v-on:change="$emit('filter-account', $event)"
      ></v-select>
    </v-form>
    <div>
      <label>Selecciona tu Cuenta</label>
      <select id="account" v-on:change="$emit('filter-account', $event.target.value)" v-model="accountId">
        <option 
          v-for="account in accountData.accounts" 
          v-bind:key="account.id"
          v-bind:value="account.id">
          {{ account.type }} - {{account.number}}
        </option>
      </select>
    </div>
    <div v-if="currentAccount">
      <table>
        <thead>
          <tr>
            <th scope="col">Saldo</th>
            <th scope="col">Linea Crédito</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ currentAccount.accountBalance | currency }}</td>
            <td>{{ currentAccount.creditLine | currency }}</td>
            <td>{{ currentAccount.accountBalance + currentAccount.creditLine | currency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
      <label>Busca al Destinatario</label>
      <typeahead 
        v-bind:options="frecuentDestinataries.destinataries" 
        v-bind:displayProperty="displayProperty" 
        v-bind:searchProperty="searchProperty" 
        v-model="selected"
        v-on:input="filterAccount">
      </typeahead>
    
    <div v-if="currentDestinataryAccount">
      <table>
        <thead>
          <tr>
            <th scope="col">Titular</th>
            <th scope="col">Banco</th>
            <th scope="col">Rut</th>
            <th scope="col">Tipo de Cuenta</th>
            <th scope="col">Email</th>
            <th scope="col">N° Cuenta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ currentDestinataryAccount.accountData.headline }}</td>
            <td>{{ currentDestinataryAccount.accountData.bankName }}</td>
            <td>{{ currentDestinataryAccount.accountData.rut }}</td>
            <td>{{ currentDestinataryAccount.accountData.accountType }}</td>
            <td>{{ currentDestinataryAccount.accountData.email }}</td>
            <td>{{ currentDestinataryAccount.accountData.accountNumber }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="currentDestinataryAccount">
        <label for="ammout">Ingresa el monto que vas a transferir</label>
        <input type="text" id="amount" v-model="amount" />
        <p>Monto a Transferir : {{ amount | currency }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import Typeahead from '../utilities/Typeahead.vue';

export default {
  components : {
    Typeahead
  },
  props : {
    accountData : {
      type : Object,
      required : true
    },
    frecuentDestinataries : {
      type : Object,
      required : true
    },
    currentAccount : {
      type : Object
    },
    currentDestinataryAccount : {
      type : Object
    }
  },
  data() {
    return {
      accountId : this.accountData.accounts[0].id,
      selected: null,
      searchProperty : 'name',
      displayProperty : 'name',
      amount : null,
      valid : true
    }
  },
  mounted() {
    this.$emit('filter-account', this.accountId)
  },
  methods : {
    filterAccount (destinataryId) {
      this.$emit('filter-destinatary', destinataryId);
    }
  },
  computed : {

  }
}

</script>

<style lang="scss">

</style>
