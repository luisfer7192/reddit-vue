<template>
  <div class="list is-hoverable">
    <p>Reddit Posts</p>
    <div class="list-item" v-for="(data, index) in posts" :key="index">
      <Post :data="data" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from './Post';

export default {
  name: 'Menu',
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