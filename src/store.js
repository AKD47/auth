import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
// axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// Vue.prototype.$http = axios;

export default new Vuex.Store({
    state: {
        status: '',
        user: {
            username: '',
            code: ''
        },
        data: {
            traffic: '',
            minutes: ''
        }
    },
    mutations: {
        auth_request(state){
            state.status = 'loading';
        },
        auth_success(state, user){
            state.status = 'success';
            // state.token = token;
            state.user = user;
        },
        auth_error(state){
            state.status = 'error';
            // console.log(state.status);
        },
        logout(state){
            state.status = '';
            // state.token = '';
        },
    },
    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                console.log(user);
                // console.log(this.data);
                axios.post('/status', user).then((response) => {
                    console.log(response.data.traffic);
                    console.log(response.data.minutes);
                    this.state.data.traffic = response.data.traffic;
                    this.state.data.minutes = response.data.minutes;
                    console.log(this.state.data);
                    // timeData.traffic = response.data.traffic;
                    // timeData.minutes = response.data.minutes;
                    localStorage.setItem('traffic', response.data.traffic);
                    localStorage.setItem('minutes', response.data.minutes);
                    commit('auth_success', user);
                    resolve(response);
                }).catch((error) => {
                    commit('auth_error');
                    // console.log(error);
                    localStorage.removeItem('token');
                    reject(error)
                })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('logout');
                localStorage.removeItem('token');
                resolve()
            })
        }
    },
    getters : {
        // isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})
