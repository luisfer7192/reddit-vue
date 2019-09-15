<template>
  <div class="container is-widescreen marginTop15" v-show="isNotEmpty">
    <h1 class="textCenter">{{post.author}}</h1>
    <img :src="getImageUrl" :alt="post.author" class="image centerItem marginTop15">
    <p class="marginTop15">{{post.title}}</p>
    <div v-if="post.is_video" class="videoContent marginTop15">
      <p class="textCenter">Video</p>
      <video width="450" controls :src="videoUrl" class="centerItem marginTop15 video"></video>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Preview',
  computed: {
    ...mapGetters({ post: 'getCurrentPost' }),
    getImageUrl () {
      if (!this.post.thumbnail) {
        return 'https://bulma.io/images/placeholders/96x96.png';
      }
      return this.post.thumbnail
    },
    isNotEmpty () {
      return Boolean(Object.keys(this.post).length);
    },
    videoUrl () {
      if (!this.post.media && !this.post.media.reddit_video) {
        return null;
      }
      return this.post.media.reddit_video.fallback_url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>