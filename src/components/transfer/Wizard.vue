<template>
  <div class="container">
    <h1>Transferencias</h1>
    <step-nav v-bind:steps="steps" v-bind:currentstep="currentstep">
        </step-nav>
    <template v-if="accountData">
      <detail
        v-bind:accountData="accountData" 
        v-bind:currentAccount="currentAccount" 
        v-bind:frecuentDestinataries="frecuentDestinataries" 
        v-bind:currentDestinataryAccount="currentDestinataryAccount" 
        v-on:filter-account="filterAccount"
        v-on:filter-destinatary="filterDestinataryAccount">
      </detail>
      <hr>
      <confirm
        v-bind:currentAccount="currentAccount"
        v-bind:currentDestinataryAccount="currentDestinataryAccount">
      </confirm>
      <hr>
    </template>
    <template v-if="currentAccount && currentDestinataryAccount">
      <voucher
        v-bind:currentAccount="currentAccount"
        v-bind:currentDestinataryAccount="currentDestinataryAccount">
      </voucher>
    </template>
  </div>
</template>

<script>
import Detail from './Detail.vue';
import Confirm from './Confirm.vue';
import Voucher from './Voucher.vue';
import StepNav from './StepNav.vue'

export default {
  components : {
    Confirm,
    Detail,
    Voucher,
    StepNav
  },
  created () {
    this.getAccountData();
    this.getFrecuentDestinataries();
  },
  data () {
    return {
      step : 'Confirm',
      accountData : null,
      frecuentDestinataries : null,
      currentAccount : null,
      currentDestinataryAccount : null,
      currentstep: 1,
      steps : [
        {
          id: 1,
          title: "Position",
          icon_class: "fa fa-map-marker"
        },
        {
          id: 2,
          title: "Category",
          icon_class: "fa fa-folder-open"
        },
        {
          id: 3,
          title: "Send",
          icon_class: "fa fa-paper-plane"
        }
      ]
    }
  },
  methods : {
    getAccountData () {
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
            type : 'Cuenta Vista', 
            accountBalance : 6000000, 
            creditLine : 2000000,
            number : '1111-1111-1111'
          }
        ] 
      }
    },
    getFrecuentDestinataries () {
      this.frecuentDestinataries = {
        destinataries : [
          {
            id: 1, 
            name: 'Americo Faundez', 
            accountData : {
              bankName : 'BBVA',
              accountNumber : '1234-5678-1234',
              accountType : 'Cuenta Corriente',
              headline : 'Americo Faundez',
              rut : '11.111.111-1',
              email : 'afaundez@bbva.cl'
            }
          },
          {
            id: 2, 
            name: 'Claudio Salazar', 
            accountData : {
              bankName : 'Scotiabank',
              accountNumber : '4321-4747-3213',
              accountType : 'Cuenta Vista',
              headline : 'Claudio Salazar',
              rut : '22.222.222-2',
              email : 'csalazar@scotiabank.cl'
            }
          },
          {
            id: 3, 
            name: 'Andres Perez', 
            accountData : {
              bankName : 'BBVA',
              accountNumber : '4444-5555-6666',
              accountType : 'Cuenta Corriente',
              headline : 'Andres Perez',
              rut : '33.333.333-3',
              email : 'aperez@bbva.cl'
            }
          },
          {
            id: 4, 
            name: 'Jessica Fusco', 
            accountData : {
              bankName : 'Scotiabank',
              accountNumber : '1234-5434-4324',
              accountType : 'Cuenta Vista',
              headline : 'Jessica Fusco',
              rut : '44.444.444-4',
              email : 'jfusco@scotiabank.cl'
            }
          },
          {
            id: 5, 
            name: 'Rafael Heredia', 
            accountData : {
              bankName : 'BBVA',
              accountNumber : '4433-6655-3213',
              accountType : 'Cuenta Corriente',
              headline : 'Rafael Heredia',
              rut : '44.444.444-4',
              email : 'rheredia@bbva.cl'
            }
          },
        ]
      }
    },
    filterAccount (accountId) {
      this.currentAccount = this.accountData.accounts.find((account) => account.id == accountId);
    },
    filterDestinataryAccount (destinataryId) {
      this.currentDestinataryAccount = this.frecuentDestinataries.destinataries.find((destinatary) => destinatary.id == destinataryId);
      console.log(this.currentDestinataryAccount);
    }
  }
}
</script>

<style lang="scss">

</style>
