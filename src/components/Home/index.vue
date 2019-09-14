<template>
  <div class="columns">
    <div class="column is-one-third-widescreen is-one-third-desktop is-6-tablet is-8-mobile">
      <Posts />
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Posts from '../Posts';

export default {
  name: 'Home',
  components: {
    Posts
  },
  mounted () {
    this.fectchPosts()
  },
  methods: {
    ...mapActions([ 'fectchPosts' ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>