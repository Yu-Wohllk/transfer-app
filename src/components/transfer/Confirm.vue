<template>
  <div>
    <h2>Confirmar</h2>
    <div v-if="currentAccount">
      <h3>Cuenta de Origen</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">Tipo Cuenta</th>
            <th scope="col">Numero Cuenta</th>
            <th scope="col">Saldo</th>
            <th scope="col">Linea Crédito</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ currentAccount.type }}</td>
            <td>{{ currentAccount.number }}</td>
            <td>{{ currentAccount.accountBalance | currency }}</td>
            <td>{{ currentAccount.creditLine | currency }}</td>
            <td>{{ currentAccount.accountBalance + currentAccount.creditLine | currency }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="currentDestinataryAccount">
      <h3>Cuenta Destino</h3>
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
            <td>{{ currentDestinataryAccount.accountData.rut | rut }}</td>
            <td>{{ currentDestinataryAccount.accountData.accountType }}</td>
            <td>{{ currentDestinataryAccount.accountData.email }}</td>
            <td>{{ currentDestinataryAccount.accountData.accountNumber }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentAccount: {
      type: Object
    },
    currentDestinataryAccount: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
</style>
