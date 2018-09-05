import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'Filters/filters.js'
Vue.use(Vuetify)
import DestinataryAccountDetail from '@/transfer/DestinataryAccountDetail.vue'

describe('DestinataryAccountDetail.vue', () => {
  it('can receive props', () => {
    const wrap = shallowMount(DestinataryAccountDetail, {
      propsData : {
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
        }
      }
    });
    
    expect(wrap.vm.currentDestinataryAccount.name).toBe('Americo Faundez');
    expect(wrap.vm.currentDestinataryAccount.accountData.email).toBe('afaundez@bbva.cl');

  });
})