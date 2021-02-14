<template>
  <div @click="makeHidden" class="container"><h2>TEST</h2></div>
</template>

<script>
export default {
  props: ['JS'],

  methods: {
    makeHidden: function () {
      this.$emit('hide')
    },
  },
}
</script>

<style>
.container {
  background-color: black;
  color: #fff;
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>
