<template>
  <div class="list is-hoverable container">
    <p class="listTitle">Reddit Posts</p>
    <div class="separator" />
    <div class="listContainer">
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
import { mapGetters, mapMutations } from 'vuex';
import Post from './Post';

export default {
  name: 'Posts',
  components: {
    Post
  },
  methods: {
    ...mapMutations([ 'dismissAllPosts' ]),
    dismissAll () {
      this.dismissAllPosts()
    }
  },
  computed: {
    ...mapGetters({ posts: 'getPosts' })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>