<template>
  <section class="mockup-container section">
    <h1 class="mockup-header">Random Escape Room</h1>
    <video autoplay muted loop playsinline class="mockup-video">
      <source
        src="https://res.cloudinary.com/dbopxlpuy/video/upload/c_scale,f_auto,w_1200/v1622856374/Escape%20Room/EscapeRoomTranslucent_x4dlph.mov"
      />
    </video>
    <div class="author-banner">
      <h4 class="mockup-created">Created By</h4>
      <div class="authors-list">
        <div class="mockup-author-container">
          <h3 class="mockup-author">Karen Choi</h3>
          <h5 class="graduation">Harvard 2025</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Crystal Liang</h3>
          <h5 class="graduation">MIT 2025</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Michael Tarasov</h3>
          <h5 class="graduation">Baruch 2025</h5>
        </div>
        <div class="mockup-author-container">
          <h3 class="mockup-author">Michelle Sun</h3>
          <h5 class="graduation">SITHS 2024</h5>
        </div>
      </div>

      <p class="mockup-desc">
        Random Escape Room was developed for the 2021 Full-Stack Competition in
        AP CSP. Using Vue with Firebase, the application is a series of 4 escape
        rooms the user must figure out. The player controlled character is bound
        to the screen and can interact with the environment. User’s initial run
        is recorded for the leaderboard and all subsequent runs by a user are
        only record for their account.
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
        `https://github.com/staten-island-tech/full-stack-2021-escaperoom`,
        '_blank'
      )
    },
    onClickSite() {
      window.open(`https://escaperoom2021.netlify.app/`, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
