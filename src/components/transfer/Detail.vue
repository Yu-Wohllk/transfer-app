<template>
  <div>
    <h2>Datos de la Transferencia</h2>
    <form>
      <div class="form-group">
        <label for="account">Selecciona la Cuenta</label>
        <select class="form-control" id="account" v-on:change="$emit('filter-account', $event.target.value)">
          <option 
            v-for="account in accountData.accounts" 
            v-bind:key="account.id"
            v-bind:value="account.id">
            {{ account.type }} - {{account.number}}
            </option>
        </select>
      </div>
      <div v-if="currentAccount">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Saldo</th>
              <th scope="col">Linea Crédito</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ currentAccount.accountBalance }}</td>
              <td>{{ currentAccount.creditLine }}</td>
              <td>{{ currentAccount.accountBalance + currentAccount.creditLine }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  props : {
    accountData : {
      type : Object,
      required : true
    },
    currentAccount : {
      type : Object
    }
  }
}

</script>

<style lang="scss">

</style>
