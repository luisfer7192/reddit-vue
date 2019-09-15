<template>
  <div class="card" @click="setCurrentPost(data)">
    <div class="card-content">
      <div class="contentHeader">
        <div class="unread" />
        <p class="floatLeft">{{data.author}}</p>
        <p class="floatRight">{{getDate}}</p>
      </div>
      <div class="media contentBody">
        <div class="media-left floatLeft">
          <figure class="image is-64x64">
            <img :src="getImage" alt="post image" class="image">
          </figure>
        </div>
        <div class="media-content floatRight">
          <p>{{data.title}}</p>
        </div>
      </div>

      <div class="contentFooter">
        <b-button icon-left="close-circle" class="dismissBtn" @click="dismiss()">
          Dismiss Post
        </b-button>
        <p class="floatRight comments">{{data.num_comments}} comments</p>
      </div>
    </div>
    <b-icon icon="chevron-right" size="is-medium" type="is-white" class="iconRight"></b-icon>
  </div>
</template>

<script>
import moment from 'moment';
import { mapMutations } from 'vuex';

export default {
  name: 'Post',
  props: {
    data: Object
  },
  methods: {
    ...mapMutations([ 'dismissPost', 'setCurrentPost' ]),
    dismiss () {
      this.dismissPost(this.data.id)
    }
  },
  computed: {
    getDate () {
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