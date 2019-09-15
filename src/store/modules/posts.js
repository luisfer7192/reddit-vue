import Vue from 'vue'
import { ToastProgrammatic as Toast } from 'buefy'
import { getPosts } from '../api'

const state = {
  posts: [],
  currentPost: {},
  after: null,
  setIsLoading: false,
  showMenu: false,
  isLoading: false
}

const mutations = {
  setPosts (state, data) {
    const posts = data.map((d) => ({ ...d.data, unread: true}))
    Vue.set(state, 'posts', [...new Set([...state.posts, ...posts])])
  },
  setCurrentPost (state, currentPost) {
    const record = state.posts.find(post => post.id === currentPost.id)
    const index = state.posts.indexOf(record)
    Vue.set(state.posts[index], 'unread', false)
    Vue.set(state, 'currentPost', currentPost)
  },
  setAfter (state, after) {
    Vue.set(state, 'after', after)
  },
  setIsLoading (state, status) {
    Vue.set(state, 'isLoading', status)
  },
  dismissPost (state, id) {
    const record = state.posts.find(post => post.id === id)
    const index = state.posts.indexOf(record);
    Vue.delete(state.posts, index)
  },
  dismissAllPosts () {
    Vue.set(state, 'posts', [])
  },
  updateShowMenu (state, status) {
    Vue.set(state, 'showMenu', status)
  }
}

const actions = {
  async fectchPosts ({ commit, state }) {
    commit('setIsLoading', true)
    const posts = await getPosts(state.after)
    if (posts) {
      commit('setAfter', posts.after)
      commit('setPosts', posts.children)
    } else {
      Toast.open({
        message: 'Error getting the posts',
        type: 'is-danger',
        position: 'is-bottom'
      })
    }
    commit('setIsLoading', false)
  }
}

const getters = {
  getPosts (state) {
    return state.posts
  },
  getShowMenu (state) {
    return state.showMenu
  },
  getCurrentPost (state) {
    return state.currentPost
  },
  getIsLoading (state) {
    return state.isLoading
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
