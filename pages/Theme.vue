<template>
  <main class="theme-switcher">
    <ThemesColor icon="moon" color="dark" />
    <ThemesColor icon="sun" color="light" />
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
