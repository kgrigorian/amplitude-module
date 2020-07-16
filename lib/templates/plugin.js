import Vue from 'vue';
import VueAmplitude from 'vue-amplitude-js';

Vue.use(VueAmplitude, <%= JSON.stringify(options) %>);
