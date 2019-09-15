<template>
  <div class="columns">
    <transition name="menu">
      <div v-if="showMenu" class="column is-one-third-widescreen is-one-third-desktop is-6-tablet is-8-mobile menuPosts">
        <Posts />
      </div>
    </transition>
    <div class="column">
      <Preview />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Posts from '../Posts';
import Preview from '../Preview';

export default {
  name: 'Home',
  data () {
    return {
      windowWidth: 0
    }
  },
  mounted() {
    this.fectchPosts()
    this.$nextTick(function() {
      // add an event to know if we hide the menu
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth()
    })
  },
  components: {
    Posts,
    Preview
  },
  methods: {
    ...mapMutations([ 'updateShowMenu' ]),
    ...mapActions([ 'fectchPosts' ]),
    getWindowWidth(event) {
      const oldWindowWidth = this.windowWidth
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth <= 768 && oldWindowWidth > 768) {
        if (this.showMenu) {
          this.updateShowMenu(false)
        }
      } else if (this.windowWidth > 768) {
        if (!this.showMenu) {
          this.updateShowMenu(true)
        }
      }
    },
  },
  computed: {
    ...mapGetters({ showMenu: 'getShowMenu' })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>