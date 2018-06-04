import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import Datepicker from './Datepicker.vue'

const CustomElement = wrap(Vue, Datepicker)

window.customElements.define('datepicker', CustomElement)
