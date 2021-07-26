<template>
  <nav class="desk">
    <ul class="desk-nav">
      <nuxt-link to="/" class="nav-item-desk">Home</nuxt-link>
      <nuxt-link to="/StudentWork" class="nav-item-desk"
        >Student Work</nuxt-link
      >
      <nuxt-link to="/Blog" class="nav-item-desk">Blog</nuxt-link>
      <nuxt-link to="/Resources" class="nav-item-desk">Resources</nuxt-link>
      <div to="/Theme" class="dropdown-parent">
        <h4 class="nav-item-desk dropdown-header" @click="openThemeMenu">
          Theme
        </h4>
        <Theme v-if="openTheme" />
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openTheme: false,
    }
  },
  methods: {
    openThemeMenu() {
      this.openTheme = !this.openTheme
    },
  },
}
</script>

<style lang="scss">
.dropdown-parent {
  list-style: none;
}
.dropdown-header {
  font-weight: 300;
}

.desk {
  background-color: var(--desk-background);
  width: 100%;

  margin: 0;

  z-index: 2;

  //height: 6vh;
}
.desk-nav {
  @include flex-row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.dropdown-parent {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
.dropdown-header:hover,
.dropdown-header:active {
  transform: none;
}
@include tablet {
  .desk {
    display: none;
  }
}
</style>
