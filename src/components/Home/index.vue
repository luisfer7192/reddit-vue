<template>
  <div class="hello">
    <p>I am the home body</p>
    <p>{{ sayHi }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      sayHi: 'Hi world'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>