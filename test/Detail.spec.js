import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import '../src/filters/filters.js'
Vue.use(Vuetify)
import Detail from '@/transfer/Detail.vue'

describe('Detail.vue', () => {
  
  it('can load data', () => {
    const wrapper = mount();
  })
})

const mount = () => {
  return shallowMount(Detail, {
    propsData: {
      currentAccount: {
        'id': 1,
        'type': 'Cuenta Corriente',
        'accountBalance': 2000000,
        'creditLine': 1000000,
        'number': '0000-0000-0000'
      },
      currentDestinataryAccount : {
        "id": 1, 
        "name": "Americo Faundez", 
        "accountData" : {
          "bankName" : "BBVA",
          "accountNumber" : "1234-5678-1234",
          "accountType" : "Cuenta Corriente",
          "headline" : "Americo Faundez",
          "rut" : "11.111.111-1",
          "email" : "afaundez@bbva.cl"
        }
      },
      frecuentDestinataries : [{
        "id": 1, 
        "name": "Americo Faundez", 
        "accountData" : {
          "bankName" : "BBVA",
          "accountNumber" : "1234-5678-1234",
          "accountType" : "Cuenta Corriente",
          "headline" : "Americo Faundez",
          "rut" : "11.111.111-1",
          "email" : "afaundez@bbva.cl"
        }
      }],
      accountData : [{ 
        "id" : 1, 
        "type" : "Cuenta Corriente", 
        "accountBalance" : 2000000, 
        "creditLine" : 1000000,
        "number" : "0000-0000-0000"
      }]
    }
  })
}