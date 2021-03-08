<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Fire Emblem</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,q_auto:eco,w_1200/v1615056677/FireEmblemBlack_snrnnj.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">William Anderson</h3>
          <h5 class="graduation">CUNY Hunter 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Kai Tong Gao</h3>
          <h5 class="graduation">Cornell 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Sarah Abdel Fatah</h3>
          <h5 class="graduation">CUNY 2024</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Winny Chan</h3>
          <h5 class="graduation">Long Island University</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Fire Emblem is a Full-stack online game based on the popular Fire Emblem
        franchise. The game is built using NodeJS, Socket.io and MongoDB . The
        project was developed for and the winner of the 2020 Full-Stack
        Competion at SITHS.
      </p>

      <div class="mockup-links">
        <button
          class="mockup-button-link"
          v-on:click="onClickSite"
          aria-label="Link to the project site"
        >
          Visit
        </button>
        <button
          class="mockup-button-link"
          @click="onClickGit"
          aria-label="Link to the project's Git repo"
        >
          Github
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onClickGit() {
      window.open(
        `https://github.com/William-Anderson2020/Full-Stack-Project`,
        '_blank'
      )
    },
    onClickSite() {
      window.open(`https://full-stack-game.herokuapp.com/login`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
