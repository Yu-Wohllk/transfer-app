<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap mb-5>
      <v-flex xs12 lg5>
        <my-account-detail 
        v-bind:currentAccount="currentAccount" 
        v-if="currentAccount">
        </my-account-detail>
      </v-flex>
      <v-flex lg2 only-lg>
        <v-layout align-center justify-center fill-height>
          <div>
            <v-icon size="60" color="red">arrow_forward</v-icon>
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs12 lg5>
        <destinatary-account-detail
          v-if="currentDestinataryAccount"
          v-bind:currentDestinataryAccount="currentDestinataryAccount">
        </destinatary-account-detail>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap>
      <v-flex xs12>
        <v-alert
          :value="true"
          type="info"
        >
          Monto que vas a transferir : {{ amount | currency }}
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs12>
        <v-btn
          color="primary"
          v-on:click="submit"
        >
          Continue
        </v-btn>
        <v-btn 
          flat
          v-on:click="goBack"
        >
          Volver
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import MyAccountDetail from './MyAccountDetail.vue';
import DestinataryAccountDetail from './DestinataryAccountDetail.vue';

export default {
  components : {
    MyAccountDetail,
    DestinataryAccountDetail
  },
  props: {
    currentAccount: {
      type: Object
    },
    currentDestinataryAccount: {
      type: Object
    },
    amount : {
      type : Number
    }
  },
  methods : {
    submit () {
      this.$emit('go-next-step');
    },
    goBack () {
      this.$emit('go-back-step');
    }
  }
};
</script>

<style lang="scss">
</style>
