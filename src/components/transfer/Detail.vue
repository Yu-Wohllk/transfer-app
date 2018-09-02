<template>
  <v-container fluid grid-list-md>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <div class="subheading">Selecciona tu cuenta</div>
          <v-select
            item-text="number"
            item-value="id"
            v-bind:items="accountData.accounts"
            v-bind:rules="accountIdRules"
            v-model="accountId"
            label="Seleccione una cuenta"
            solo
            v-on:change="$emit('filter-account', $event)"
            required
          >
            <template slot="selection" slot-scope="data">
              {{ data.item.number }} - {{ data.item.type }}
            </template>
            <template slot="item" slot-scope="data">
              {{ data.item.number }} - {{ data.item.type }}
            </template>
          </v-select>
          <my-account-detail 
          v-bind:currentAccount="currentAccount" 
          v-if="currentAccount">
          </my-account-detail>
          <br>
          <div class="subheading">¿A quién vas a transferir?</div>
          <v-combobox
            v-model="selectedDestinatary"
            v-bind:items="frecuentDestinataries.destinataries"
            item-text="name"
            item-value="name"
            v-bind:rules="accountIdRules"
            v-on:change="filterAccount"
            required
          ></v-combobox>
          <destinatary-account-detail
            v-if="currentDestinataryAccount"
            v-bind:currentDestinataryAccount="currentDestinataryAccount">
          </destinatary-account-detail>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-end fill-height v-if="currentDestinataryAccount">
        <br>
        <v-flex xs12 lg3>
          <div class="subheading">Ingresa el monto que vas a transferir</div>
        <v-text-field 
          v-model="amount"
          v-bind:rules="amountRules"
          label="Amount"
          required>
        </v-text-field>
        </v-flex>
        <v-flex xs12 lg7>
          <p class="subheading">Monto a Transferir : {{ amount | currency }}</p>
        </v-flex>
      </v-layout>
      <v-btn
        color="primary"
        v-bind:disabled="!valid"
        v-on:click="submit"
      >
        Continue
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>

import Typeahead from '../utilities/Typeahead.vue';
import MyAccountDetail from './MyAccountDetail.vue';
import DestinataryAccountDetail from './DestinataryAccountDetail.vue';

export default {
  components : {
    Typeahead,
    MyAccountDetail,
    DestinataryAccountDetail
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
      accountIdRules : [
        v => !!v || 'Debes ingresar una cuenta'
      ],
      selectedDestinatary: null,
      selectedDestinataryRules : [
        v => !!v || 'Debes ingresar una cuenta de destino'
      ],
      amount : null,
      amountRules : [
        v => (!!v > 0 && !isNaN(v) ) || 'Debes ingresar un monto'
      ],
      valid : false
    }
  },
  mounted() {
    this.$emit('filter-account', this.accountId)
  },
  methods : {
    filterAccount () {
      try {
        this.$emit('filter-destinatary', this.selectedDestinatary.id);
      } catch(error) {
        console.log('No hay seleccion de destinatario');
      }
    },
    submit () {
      if (this.$refs.form.validate()) {
        console.log('validado!');
        this.$emit('go-next-step',2);
      } 
    }
  }
}

</script>

<style lang="scss">

</style>
