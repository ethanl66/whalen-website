<template>
  <nav class="desk">
    <ul class="desk-nav">
      <nuxt-link to="/" class="nav-item-desk">Home</nuxt-link>
      <nuxt-link to="/StudentWork" class="nav-item-desk"
        >Student Work</nuxt-link
      >
      <nuxt-link to="/Blog" class="nav-item-desk">Blog</nuxt-link>
      <nuxt-link to="/Resources" class="nav-item-desk">Resources</nuxt-link>
      <nuxt-link to="/test" class="nav-item-desk">Theme</nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
.desk-nav {
  background-color: #000;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  @include flex-row;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  margin-bottom: 2rem;
}
.nav-item-desk,
.nav-item-desk:visited,
.nav-item-desk:link {
  font-size: var(--h4);
  font-weight: 300;
  margin: 1rem 0;
  padding: 1rem 2rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
}
.nav-item-desk:hover,
.nav-item-desk:active {
  background-position: 100%;
  color: black;
  transform: translateX(1rem);
}
@include tablet {
  .desk {
    display: none;
  }
}
</style>
