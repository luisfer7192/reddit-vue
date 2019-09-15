<template>
  <div id="burger" :class="{ 'active' : showMenu }" @click.prevent="toggle">
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1"></span>
        <span class="burger-bar burger-bar--2"></span>
        <span class="burger-bar burger-bar--3"></span>
      </button>
    </slot>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MenuIcon',
  methods: {
    ...mapMutations([ 'updateShowMenu' ]),
    toggle() {
      this.updateShowMenu(!this.showMenu)
    }
  },
  computed: {
    ...mapGetters({ showMenu: 'getShowMenu' })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>