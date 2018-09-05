import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'Filters/filters.js'
Vue.use(Vuetify)
import MyAccountDetail from '@/transfer/MyAccountDetail.vue'

describe('MyAccountDetail.vue', () => {
  it('can receive props', () => {
    const wrap = shallowMount(MyAccountDetail, {
      propsData: {
        currentAccount: {
          'id': 1,
          'type': 'Cuenta Corriente',
          'accountBalance': 2000000,
          'creditLine': 1000000,
          'number': '0000-0000-0000'
        }
      }
    });

    expect(wrap.vm.currentAccount.number).toBe('0000-0000-0000');
    expect(wrap.vm.currentAccount.type).toBe('Cuenta Corriente');

  });
})