<template>
  <div class="list is-hoverable container">
    <p class="listTitle">Reddit Posts</p>
    <div class="separator" />
    <div class="listContainer" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
      <transition-group name="list">
        <div class="list-item postsContainer" v-for="data in posts" :key="data.id">
          <Post :data="data" />
        </div>
      </transition-group>
    </div>
    <b-button type="is-dark" icon-left="close-circle" class="dismissAllBtn" @click="dismissAll()">
      Dismiss All
    </b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Post from './Post';

export default {
  name: 'Posts',
  components: {
    Post
  },
  methods: {
    ...mapActions([ 'fectchPosts' ]),
    ...mapMutations([ 'dismissAllPosts' ]),
    dismissAll () {
      this.dismissAllPosts()
    },
    loadMore () {
      this.fectchPosts()
    }
  },
  computed: {
    ...mapGetters({ posts: 'getPosts', isLoading: 'getIsLoading' })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>