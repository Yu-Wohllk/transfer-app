import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import Confirm from '@/components/transfer/Confirm.vue'

describe('Confirm.vue', () => {
  it('emit event when next step clicked', () => {
    const wrapper = shallowMount(Confirm);
    wrapper.vm.submit();
    expect(wrapper.emitted('go-next-step')).toBeTruthy();
  })
})