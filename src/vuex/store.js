import Vue from 'vue'
import Vuex from 'vuex'
import getData from './modules/getData/get'
import webSocket from './modules/webSocket-test/webSocket'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        getData: getData,
        webSocket: webSocket
    },
});
