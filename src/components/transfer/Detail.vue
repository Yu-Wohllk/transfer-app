<template>
  <v-container fluid grid-list-md>
    <v-form v-model="valid">
      <v-layout row wrap>
        <v-flex xs6>
          <div class="subheading">Selecciona tu cuenta</div>
          <v-select
            item-text="number"
            item-value="id"
            :items="accountData.accounts"
            v-model="accountId"
            label="Seleccione una cuenta"
            solo
            v-on:change="$emit('filter-account', $event)"
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
            :items="frecuentDestinataries.destinataries"
            item-text="name"
            item-value="name"
            v-on:change="filterAccount"
          ></v-combobox>
          <destinatary-account-detail
            v-if="currentDestinataryAccount"
            v-bind:currentDestinataryAccount="currentDestinataryAccount">
          </destinatary-account-detail>
          <div v-if="currentDestinataryAccount">
            <br>
            <div class="subheading">Ingresa el monto que vas a transferir</div>
            <v-text-field v-model="amount"></v-text-field>
            <p class="subheading">Monto a Transferir : {{ amount | currency }}</p>
          </div>
        </v-flex>
      </v-layout>
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
      selectedDestinatary: null,
      amount : null,
      valid : true
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
    }
  }
}

</script>

<style lang="scss">

</style>
