import Vue from 'vue';
import Vuex from 'vuex';
import SrcData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: SrcData
});