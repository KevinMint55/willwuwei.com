export const state = () => ({
  post: {},
})

export const mutations = {
  setPost (state, payload) {
    state.post = payload;
  },
}

export const actions = {
  loadPost({ commit }) {
    commit('setPost');
  },
}
