<template>
  <v-stepper v-bind:value="currentStep">
    <v-stepper-header>
      <v-stepper-step step="1">Transferir</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2">Confirmar</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Comprobante</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <detail
          v-if="accountData && frecuentDestinataries"
          v-bind:accountData="accountData" 
          v-bind:currentAccount="currentAccount" 
          v-bind:frecuentDestinataries="frecuentDestinataries" 
          v-bind:currentDestinataryAccount="currentDestinataryAccount" 
          v-on:filter-account="filterAccount"
          v-on:filter-destinatary="filterDestinataryAccount"
          v-on:update-amount="updateAmount"
          v-on:go-next-step="goNextStep">
        </detail>
      </v-stepper-content>
      <v-stepper-content step="2">
        <confirm
          v-bind:currentAccount="currentAccount"
          v-bind:currentDestinataryAccount="currentDestinataryAccount"
          v-bind:amount="amount"
          v-on:go-next-step="goNextStep"
          v-on:go-back-step="goBackStep"
          >
        </confirm>
      </v-stepper-content>
      <v-stepper-content step="3">
        <voucher v-if="currentAccount && currentDestinataryAccount"
          v-bind:currentAccount="currentAccount"
          v-bind:currentDestinataryAccount="currentDestinataryAccount"
          v-bind:amount="amount">
        </voucher>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Detail from './Detail.vue';
import Confirm from './Confirm.vue';
import Voucher from './Voucher.vue';

export default {
  components : {
    Confirm,
    Detail,
    Voucher
  },
  created () {
    this.getAccountData();
    this.getFrecuentDestinataries();
  },
  data () {
    return {
      accountData : null,
      frecuentDestinataries : null,
      currentAccount : null,
      currentDestinataryAccount : null,
      amount : 0,
      currentStep: 1
    }
  },
  methods : {
    getAccountData () {
      this.accountService()
        .then(data => this.accountData = data);
    },
    getFrecuentDestinataries () {
      this.frecuentDestinatariesService()
        .then(data => this.frecuentDestinataries = data);
    },
    filterAccount (accountId) {
      this.currentAccount = this.accountData.find((account) => account.id == accountId);
    },
    filterDestinataryAccount (destinataryId) {
      this.currentDestinataryAccount = this.frecuentDestinataries.find((destinatary) => destinatary.id == destinataryId);
    },
    updateAmount (newAmount) {
      this.amount = newAmount;
    },
    goNextStep () {
      this.currentStep++;
    },
    goBackStep () {
      this.currentStep--;
    },
    accountService () {
      return fetch('http://localhost:3000/accounts')
        .then(response => response.json())
        .catch(error => console.log('Hubo un error al recuperar tus cuentas : ' + error))
    },
    frecuentDestinatariesService () {
      return fetch('http://localhost:3000/destinataries')
        .then(response => response.json())
        .catch(error => console.log('Hubo un error al recuperar tus destinatarios : ' + error))
    }
  }
}
</script>

<style lang="scss">

</style>
