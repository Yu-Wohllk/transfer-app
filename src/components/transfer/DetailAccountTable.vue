<template>
  <v-data-table
    :items="currentAccount"
    class="elevation-1"
    hide-actions
  >
    <template>
      <td>{{ currentAccount.accountBalance }}</td>
      <td class="text-xs-right">{{ currentAccount.creditLine }}</td>
      <td class="text-xs-right">{{ currentAccount.accountBalance + currentAccount.creditLine }}</td>
    </template>
  </v-data-table>  
</template>

<script>

export default {
  props : {
    currentAccount : {
      type : Object,
      required : true
    }
  },
  data () {
    return {
      headers : [
        { text: 'Saldo', value: 'accountBalance' },
        { text: 'Linea Credito', value: 'creditLine'},
        { text: 'Total', value: 'total'}
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
