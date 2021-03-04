<template>
  <nav class="menu">
    <button
      v-if="!openMenu"
      class="hamburger navigation_button"
      @click="openNav"
    >
      <span class="navigation_icon"></span>
    </button>
    <transition name="slide">
      <ul v-if="openMenu" class="nav" @click="closeNav">
        <nuxt-link to="/" class="nav-item">Home</nuxt-link>
        <nuxt-link to="/StudentWork" class="nav-item">Student Work</nuxt-link>
        <nuxt-link to="/Blog" class="nav-item">Blog</nuxt-link>
        <nuxt-link to="/Resources" class="nav-item">Resources</nuxt-link>
        <nuxt-link to="/test" class="nav-item">Theme</nuxt-link>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
    }
  },
  methods: {
    openNav: function () {
      this.openMenu = true
    },
    closeNav: function () {
      this.openMenu = false
    },
  },
}
</script>

<style lang="scss">
@media screen and (min-width: 769px) {
  .menu {
    display: none;
  }
}
.hamburger {
  height: 6.3rem;
  width: 6.3rem;
  background-color: transparent;

  border: none;
  border-radius: 50%;
  position: fixed;
  top: 1rem;
  left: 0;
  z-index: 2000;
  //box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}
.navigation_icon {
  position: relative;
}
.navigation_icon,
.navigation_icon:before,
.navigation_icon:after {
  width: 3rem;
  height: 2px;
  //background-color: #252c30;
  background-color: #fff;
  display: inline-block;
  transition: all 0.2s;
}
.navigation_icon::before,
.navigation_icon::after {
  content: '';
}
.navigation_icon::before {
  position: absolute;
  top: -0.8rem;
  left: 0;
}
.navigation_icon::after {
  position: absolute;
  top: 0.8rem;
  left: 0;
}
.navigation_button:hover .navigation_icon {
  background-color: transparent;
}
.navigation_button:hover .navigation_icon::before {
  transform: rotate(135deg);
  top: 0;
}
.navigation_button:hover .navigation_icon::after {
  transform: rotate(-135deg);
  top: 0;
}
.nav {
  background-color: #111;
  z-index: 1000;
  transition: transform 0.8s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: var(--h2);
  height: 100vh;
  width: 50vw;
  top: 0;
  left: 0;
  position: fixed;
}
@media screen and (max-width: 768px) {
  .nav {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
  }
}
.nav-item,
.nav-item:visited,
.nav-item:link {
  font-size: var(--h3);
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
.nav-item:hover,
.nav-item:active {
  background-position: 100%;
  color: black;
  transform: translateX(1rem);
}
.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
