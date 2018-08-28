<template>
  <div class="container">
    <h1>Transferencias</h1>
    <template v-if="accountData">
      <component v-bind:is="step" v-bind:accountData="accountData" v-bind:currentAccount="currentAccount"  v-on:filter-account="filterAccount"></component>
    </template>
    <template v-else>
      <p>Problemas cargando la data</p>
    </template>
  </div>
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
  created : function() {
    this.getAccountData();
  },
  data () {
    return {
      step : 'Detail',
      accountData : null,
      currentAccount : null
    }
  },
  methods : {
    getAccountData : function() {
      this.accountData = {
        accounts : [
          { 
            id : 1, 
            type : 'Cuenta Corriente', 
            accountBalance : 2000000, 
            creditLine : 1000000,
            number : '0000-0000-0000'
          },
          { 
            id : 2, 
            type : 'Cuenta Corriente', 
            accountBalance : 6000000, 
            creditLine : 2000000,
            number : '1111-1111-1111'
          }
        ] 
      }
    },
    filterAccount : function(accountId) {
      this.currentAccount =  this.accountData.accounts.find((account) => account.id == accountId);
    }
  }
}
</script>

<style lang="scss">

</style>
