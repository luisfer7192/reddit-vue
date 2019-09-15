<template>
  <div class="list is-hoverable container">
    <p class="listTitle">Reddit Posts</p>
    <div class="separator" />
    <transition-group name="list">
      <div class="list-item postsContainer" v-for="data in posts" :key="data.id">
        <Post :data="data" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from './Post';

export default {
  name: 'Posts',
  components: {
    Post
  },
  computed: {
    ...mapGetters({ posts: 'getPosts' })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>