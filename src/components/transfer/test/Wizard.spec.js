import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'Filters/filters.js'
Vue.use(Vuetify)
import Wizard from '@/transfer/Wizard.vue'

describe('Wizard.vue', () => {

  it('can load data', () => {
    const wrapper = mount();
  })

  it('can filter current account', () => {
    const wrapper = mount();
    wrapper.vm.filterAccount(1);
    expect(wrapper.vm.currentAccount).toEqual({
      'id': 1,
      'type': 'Cuenta Corriente',
      'accountBalance': 2000000,
      'creditLine': 1000000,
      'number': '0000-0000-0000'
    })
  })

  it('can filter destinatary account', () => {
    const wrapper = mount();
    wrapper.vm.filterDestinataryAccount(1);
    expect(wrapper.vm.currentDestinataryAccount).toEqual({
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
    })
  })

  it('can change amount', () => {
    const wrapper = mount();
    wrapper.vm.updateAmount(200);
    expect(wrapper.vm.amount).toBe(200);
  })

  it('can change to next step', () => {
    const wrapper = mount();
    let currentStep = wrapper.vm.currentStep;
    wrapper.vm.goNextStep();
    expect(wrapper.vm.currentStep).toBe(currentStep + 1);
  })

  it('can change to back step', () => {
    const wrapper = mount();
    let currentStep = wrapper.vm.currentStep;
    wrapper.vm.goBackStep();
    expect(wrapper.vm.currentStep).toBe(currentStep - 1);
  })
})


const mount = () => {
  return shallowMount(Wizard, {
    data() {
      return {
        frecuentDestinataries: [{
          "id": 1,
          "name": "Americo Faundez",
          "accountData": {
            "bankName": "BBVA",
            "accountNumber": "1234-5678-1234",
            "accountType": "Cuenta Corriente",
            "headline": "Americo Faundez",
            "rut": "11.111.111-1",
            "email": "afaundez@bbva.cl"
          }
        }],
        accountData: [{
          "id": 1,
          "type": "Cuenta Corriente",
          "accountBalance": 2000000,
          "creditLine": 1000000,
          "number": "0000-0000-0000"
        }]
      }
    }
  })
}