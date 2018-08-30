<template>
  <div>
    <h2>Comprobante</h2>
    <div>
      <h3>Transferencia realizada correctamente</h3>
      <table>
        <tr>
          <td>N° de Transacción</td>
          <td>{{ transactionNumber }}</td>
        </tr>
        <tr>
          <td>Cuenta de Origen</td>
          <td>{{ currentAccount.number }}</td>
        </tr>
        <tr>
          <td>Monto</td>
          <td>{{  }}</td>
        </tr> 
        <tr>
          <td>Cuenta Destino</td>
          <td>{{ currentDestinataryAccount.accountData.accountNumber }}</td>
        </tr>
        <tr>
          <td>Rut</td>
          <td>{{ currentDestinataryAccount.accountData.rut | rut }}</td>
        </tr>
        <tr>
          <td>Nombre</td>
          <td>{{ currentDestinataryAccount.accountData.headline }}</td>
        </tr>
        <tr>
          <td>Fecha</td>
          <td>{{ date }}</td>
        </tr>
        <tr>
          <td>Hora</td>
          <td>{{ hour }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  props : {
    currentAccount : {
      type : Object,
      required : true
    },
    currentDestinataryAccount : {
      type : Object,
      required : true
    }
  },
  data () {
    return {
      
    }
  },
  computed : {
    transactionNumber () {
      return Math.floor((Math.random() * 99999999) + 1);
    },
    date () {
      return new Date().toLocaleDateString();
    },
    hour () {
      return new Date().toLocaleTimeString();
    }
  }
}

</script>

<style lang="scss">

</style>
