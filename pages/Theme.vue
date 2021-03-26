<template>
  <main class="theme-switcher">
    <Color icon="moon" color="dark" />
    <Color icon="sun" color="light" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      colors: ['system', 'light', 'dark', 'theme'],
    }
  },
}
</script>

<style lang="scss">
.theme-switcher {
  height: 40vh;
  @include flex-col;
  justify-content: center;
}
</style>
