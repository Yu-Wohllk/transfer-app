import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import '../src/filters/filters.js'
Vue.use(Vuetify)
import Confirm from '@/transfer/Confirm.vue'

describe('Confirm.vue', () => {
  it('emit event when next step clicked', () => {
    const wrapper = shallowMount(Confirm);
    wrapper.vm.submit();
    expect(wrapper.emitted('go-next-step')).toBeTruthy();
  })

  it('emit event when back step clicked', () => {
    const wrapper = shallowMount(Confirm);
    wrapper.vm.goBack();
    expect(wrapper.emitted('go-back-step')).toBeTruthy();
  })
})