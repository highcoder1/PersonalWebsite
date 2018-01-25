import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

let debug = process.env.NODE_DEV !== 'production';

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    strict: debug,//严格模式下，state不是由mutation引起而发生变化会报错（因有额外开销，只在开发模式下配置）
    plugins: debug ? [createLogger()] : []//mutation时在控制台打印输出
});