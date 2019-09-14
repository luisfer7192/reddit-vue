import Vue from 'vue'
import { ToastProgrammatic as Toast } from 'buefy'
import { getPosts } from '../api';

const state = {
  posts: [],
  after: null,
  setIsLoading: false
}

const mutations = {
  setPosts (state, data) {
    const posts = data.map((d) => d.data);
    Vue.set(state, 'posts', [...new Set([...state.posts, ...posts])]);
  },
  setAfter (state, after) {
    Vue.set(state, 'after', after);
  },
  setIsLoading (state, status) {
    Vue.set(state, 'isLoading', status);
  }
}

const actions = {
  async fectchPosts ({ commit, state }) {
    commit('setIsLoading', true);
    const posts = await getPosts(state.after);
    if (posts) {
      commit('setAfter', posts.after);
      commit('setPosts', posts.children);
    } else {
      Toast.open({
        message: 'Error getting the posts',
        type: 'is-danger',
        position: 'is-bottom'
      });
    }
    commit('setIsLoading', false);
  }
}

const getters = {
  getPosts (state) {
    return state.posts
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}
