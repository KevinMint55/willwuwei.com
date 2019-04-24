import service from '~/plugins/axios'

export const state = () => ({
  hotList: [],
  category: [],
  tagsList: [],
  articles: {
    list: [],
    pageCurrent: 1,
    count: 0,
  },
})

export const mutations = {
  setHotList (state, payload) {
    state.hotList = payload;
  },
  setCategory (state, payload) {
    state.category = payload;
  },
  setTagsList (state, payload) {
    state.tagsList = payload;
  },
  setArticles (state, payload) {
    state.articles = payload;
  },
}

export const actions = {
  async loadSideBarData({ dispatch }) {
    return Promise.all([
      dispatch('getHotList'),
      dispatch('getCategory'),
      dispatch('getTagsList'),
    ]);
  },
  async getHotList({ state, commit }) {
    if (state.hotList.length > 0) return;
    const data = await service.get('blog/hot');
    commit('setHotList', data);
  },
  async getCategory({ state, commit }) {
    if (state.category.length > 0) return;
    const data = await service.get('blog/category');
    commit('setCategory', data);
  },
  async getTagsList({ state, commit }) {
    if (state.tagsList.length > 0) return;
    const data = await service.get('blog/tags');
    commit('setTagsList', data);
  },
  async getArticles({ commit }, { pageCurrent, category, tag, searchContent }) {
    const data = await service.get('blog', {
      params: {
        pageCurrent,
        category,
        tag,
        searchContent,
      },
    });
    commit('setArticles', data);
  },
}
