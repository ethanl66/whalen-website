<template>
  <main class="theme-switcher">
    <ThemesColor icon="moon" color="dark" />
    <ThemesColor icon="sun" color="light" />
    <ThemesColor icon="sun" color="light" />
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
  //height: 100%;
  width: 100%;
  @include flex-col;
  justify-content: center;

  z-index: 3;
  //border: 1px solid blue;
  position: absolute;
  top: 7rem;

  background-color: #000;
}
</style>
