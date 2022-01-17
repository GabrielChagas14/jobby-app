const state = {
    user: {},
    token: ""
}
const getters = {
    user: (state) => state.user,
    token: (state) => state.token
}
const mutations = {
    SET_USER(state, data) {
        state.user = data;
    },
    SET_TOKEN(state, data) {
        state.token = data;
    }
}
const actions = {
    setUser ({ commit }, status) {
        commit("SET_USER", status);
    },
    setToken({ commit }, status) {
        localStorage.setItem(
            "job_token",
            status
        )
        commit("SET_TOKEN", status)
    }
}
export default {
    manespaced: true,
    state,
    getters,
    mutations,
    actions
}