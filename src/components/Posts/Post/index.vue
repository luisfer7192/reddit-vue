<template>
  <div class="card">
    <div class="card-content">
      <div class="contentHeader">
        <p class="floatLeft">{{data.author}}</p>
        <p class="floatRight">{{getDate}}</p>
      </div>
      <div class="media contentBody">
        <div class="media-left floatLeft">
          <figure class="image is-96x96">
            <img :src="getImage" alt="post image" class="image">
          </figure>
        </div>
        <div class="media-content floatRight">
          <p>{{data.title}}</p>
        </div>
      </div>

      <div class="contentFooter">
        <b-button icon-left="close-circle" class="floatLeft removeBorder">
          Dismiss Post
        </b-button>
        <p class="floatRight">{{data.num_comments}} comments</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';

export default {
  name: 'Menu',
  props: {
    data: Object
  },
  computed: {
    getDate () {
      // eslint-disable-next-line
      console.log(this.data)
      return moment.unix(this.data.created).fromNow();
    },
    getImage () {
      return this.data.thumbnail === 'default' || this.data.thumbnail === 'self'
        ? 'https://bulma.io/images/placeholders/96x96.png' 
        : this.data.thumbnail
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>